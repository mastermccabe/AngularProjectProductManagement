export class Product {
  constructor(
    public id: number = null,
    public price: number = null,
    public title: string = "",
    public url: string = "",
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
}
