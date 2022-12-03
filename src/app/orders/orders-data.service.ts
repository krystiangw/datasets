import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from './models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersDataService {
  private readonly basicUrl = 'buy-orders';
  constructor(private httpClient: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.httpClient.get(environment.apiUrl + this.basicUrl) as Observable<Order[]>;
  }

  getOrder(orderId: string): Observable<Order> {
    return this.httpClient.get(environment.apiUrl + `${this.basicUrl}/${orderId}`) as Observable<Order>;
  }
}
