import products from "../../data/products.json";
import { Product } from "../model/Product";

export function getProducts(): Product[] {
  return products.products;
}
