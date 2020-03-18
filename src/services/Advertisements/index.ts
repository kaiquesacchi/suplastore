import axios from 'axios';

export default class AdvertisementsService {
  static url = 'http://localhost:5001/advertisement';

  static getAll() {
    return axios.get(AdvertisementsService.url, {});
  }
  static getByOwner(owner: string) {
    return axios.get(AdvertisementsService.url + `?owner=${owner}`, {});
  }
  static create(newAdvertisement: object) {
    return axios.post(AdvertisementsService.url, newAdvertisement);
  }
}
