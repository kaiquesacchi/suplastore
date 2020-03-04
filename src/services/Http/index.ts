import axios from 'axios';

export default class HttpService {
  static get(url: string, data = {}) {
    return axios.get(url, data);
  }

  static post(url: string, data = {}) {
    return axios.post(url, data);
  }

  static put(url: string, data = {}) {
    return axios.put(url, data);
  }

  static delete(url: string, data = {}) {
    return axios.delete(url, data);
  }
}
