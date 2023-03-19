import { product } from './products.model';

export const products: any[] = [];

export const addProduct = (data: product) => {
  products.push(data);
}

export const calcStock = (): number => {
  let total = 0;
  products.forEach((item) => {
    total += item.stock;
  });
  return total;
}
