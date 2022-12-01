import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../shared/models/order.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersDataService {

  constructor(private httpClient: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.httpClient.get(environment.apiUrl + '/buy-orders') as Observable<Order[]>;
  }
}
