export interface BaseController {
  findAll(): any;
  findById(id: string): any;
  create(body: any): any;
  delete(id: string): any;
  update(id: string, body: any): any;
}
