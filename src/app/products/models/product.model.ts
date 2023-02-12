import { Category } from "./category.model";

export default class ProductModel {
  constructor(
    public id: number,
    public name: string,
    public description: string | null,
    public price: number,
    public category: Category,
    public isAvailable: boolean = true,
  ) { }

  // export interface IProductModel {
  //   name: string;
  //   description?: string;
  //   price: number;
  //   category: Category;
  //   isAvailable: boolean;
  // }
}
