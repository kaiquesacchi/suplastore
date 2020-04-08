import HttpService from '../Http';

export default class ProductsService {
  static getAll(pageNumber: number | null = null, pageSize: number | null = null) {
    if (pageNumber === null || pageSize === null) {
      return HttpService.get('product');
    }
    return HttpService.get(`product?page_number=${pageNumber}&page_size=${pageSize}`);
  }
  static getByType(
    type: string,
    pageNumber: number | null = null,
    pageSize: number | null = null
  ) {
    if (pageNumber === null || pageSize === null) {
      return HttpService.get(`product?type=${type}`);
    }
    return HttpService.get(
      `product?type=${type}&page_number=${pageNumber}&page_size=${pageSize}`
    );
  }
  static create(newProduct: object) {
    return HttpService.post('product', newProduct);
  }
}
