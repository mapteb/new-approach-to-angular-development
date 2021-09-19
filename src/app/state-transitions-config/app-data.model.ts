import { Product } from '../product/product.model';

export class AppData {
    products: Product[] = [];
    cartProducts: Product[] = [];
    product: Product = new Product();
}

