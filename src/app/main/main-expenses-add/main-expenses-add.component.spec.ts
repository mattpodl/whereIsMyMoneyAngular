import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainExpensesAddComponent } from './main-expenses-add.component';

describe('MainExpensesAddComponent', () => {
  let component: MainExpensesAddComponent;
  let fixture: ComponentFixture<MainExpensesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainExpensesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainExpensesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
