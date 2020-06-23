import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class OrderService {
  // constructor(private http: Http) {}
  constructor(private authHttp: AuthHttp) {}
  getOrders() {
    console.log('Order Service');

    return this.authHttp.get('/api/orders').map((response) => response.json());
  }
}
