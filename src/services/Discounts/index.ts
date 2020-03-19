import axios from 'axios';

export default class DiscountsService {
  static url = 'http://localhost:5001/discount';

  static getAll() {
    return axios.get(DiscountsService.url, {});
  }
  static getByOwner(owner: string) {
    return axios.get(DiscountsService.url + `?owner=${owner}`, {});
  }
  static create(newDiscount: object) {
    return axios.post(DiscountsService.url, newDiscount);
  }
}
