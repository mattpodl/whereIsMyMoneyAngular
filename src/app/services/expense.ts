import {Category} from './category';

export class Expense {
  constructor(
    public id?: number,
    public description?: string,
    public amount?: number,
    public date?: string,
    public categoryId?: number,
    public category?: Category,
    ){}
}

