import HttpService from '../Http';

export default class UsersService {
  static getByEmail(email: string) {
    return HttpService.get('user?email=' + email);
  }
  static create(name: string, email: string, password: string) {
    return HttpService.post('user', { name: name, email: email, password: password });
  }
}
