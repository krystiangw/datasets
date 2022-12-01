import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasetsListComponent } from './datasets-list/datasets-list.component';
import { DatasetsListItemComponent } from './datasets-list-item/datasets-list-item.component';
import { DatasetsRoutingModule } from './datasets-routing.module';

@NgModule({
  declarations: [
    DatasetsListComponent,
    DatasetsListItemComponent
  ],
  imports: [
    CommonModule,
    DatasetsRoutingModule
  ]
})
export class DatasetsModule { }
