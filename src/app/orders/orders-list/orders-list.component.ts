import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersDataService } from '../orders-data.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  orders$: Observable<Order[]> = this.ordersDataService.getOrders();

  constructor(private ordersDataService: OrdersDataService) {}

  ngOnInit(): void {

  }
}
