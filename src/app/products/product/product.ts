export class Product {
  constructor(
   public ProductName : string  ='',
   public Supplier : string ='',
   public Category : string ='',
   public UnitPrice : number=0,
   public UnitsInStock : number=0,
   public UnitsOnOrder : number=0,
   public ReorderLevel? : number,
   public Discontinued :boolean = false){}
} 


