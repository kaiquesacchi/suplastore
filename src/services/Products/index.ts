import HttpService from '../Http';

export default class ProductsService {
  static getAll() {
    return HttpService.get('product');
  }
}
