import HttpService from '../Http';

export default class ProductsService {
  static getAll() {
    return HttpService.get('product');
  }
  static create(newProduct: object) {
    return HttpService.post('product', newProduct);
  }
}
