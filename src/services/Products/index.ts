import HttpService from '../Http';

export default class ProductsService {
  static getAll() {
    return HttpService.get('product');
  }
  static getByType(type: string) {
    return HttpService.get(`product?type=${type}`);
  }
  static create(newProduct: object) {
    return HttpService.post('product', newProduct);
  }
}
