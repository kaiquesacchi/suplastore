import axios from 'axios';
import configJSON from '../../instance/config.json';

export default class HttpService {
  static url = configJSON.backendURL;

  static get(path: string, data = {}) {
    return axios.get(HttpService.url + path, data);
  }

  static post(path: string, data = {}) {
    return axios.post(HttpService.url + path, data);
  }

  static put(path: string, data = {}) {
    return axios.put(HttpService.url + path, data);
  }

  static delete(path: string, data = {}) {
    return axios.delete(HttpService.url + path, data);
  }
}
