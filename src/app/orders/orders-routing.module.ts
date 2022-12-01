import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';
import { OrdersFormComponent } from './orders-form/orders-form.component';
import { OrdersListComponent } from './orders-list/orders-list.component';

const routes: Routes = [
  {
    path: 'orders',
    component: OrdersListComponent
  },
  {
    path: 'orders/:id',
    component: OrdersDetailsComponent
  },
  {
    path: 'orders/new',
    component: OrdersFormComponent
  },
  {
    path: 'orders/:id/edit',
    component: OrdersFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {}
