export class Product {
  [x:string]:any;
  constructor(
    public ProductId: string,
    public ProductName: string,
    public Manufacturer: string,
    public Category: string,
    public Price: number
  ){}
}
