import HttpService from '../Http';

export default class CartsService {
  static create(cart: object) {
    return HttpService.post('cart', cart);
  }
}
