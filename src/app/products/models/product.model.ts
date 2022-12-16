import { Category } from "./category.model";

export interface IProductModel {
  name: string;
  description?: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}

/*export class Product {
  constructor(
    public name: string,
    public description: string | null,
    public price: number,
    public category: Category,
    public isAvailable: boolean = true,
  ) { }
}*/
