import HttpService from '../Http';

export default class CartsService {
  static getById(id: number) {
    return HttpService.get(`product?id={id}`);
  }
}
