import {Component, OnInit} from '@angular/core';
import {ExpenseHttpService} from '../../services/expense-http.service';
import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.css']
})

export class MainChartComponent implements OnInit {
  public chart: Chart;
  private chartData: Array<[string, number]> = [];

  constructor(
    private expenseService: ExpenseHttpService,
  ) {}

  ngOnInit() {
    this.expenseService.getExpensesByCategory().subscribe(
      e => {
        e.forEach(el => this.chartData.push([el.item1, el.item2]));
        this.chart = new Chart({
          chart: {},
          title: {
            text: 'Wydatki'
          },
          credits: {
            enabled: false
          }, series: [{
            type: 'pie',
            name: 'Budget shared',
            data: this.chartData,
          }]
        });
      });
  }

}
