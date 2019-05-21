export class Category {

  public id?: number;

  constructor(
    id?: number,
    public name?: string,
  ) {
    this.id = id;
    this.name = name;
  }

}
