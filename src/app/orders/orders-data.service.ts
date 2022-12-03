import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from './models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersDataService {

  constructor(private httpClient: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.httpClient.get(environment.apiUrl + '/buy-orders') as Observable<Order[]>;
  }
}
