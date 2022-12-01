import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';
import { OrdersFormComponent } from './orders-form/orders-form.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersListItemComponent } from './orders-list-item/orders-list-item.component';


@NgModule({
  declarations: [
    OrdersListComponent,
    OrdersDetailsComponent,
    OrdersFormComponent,
    OrdersListItemComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
