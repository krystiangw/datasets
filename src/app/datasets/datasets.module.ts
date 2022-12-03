import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { CountriesModule } from './../countries/countries.module';
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
    DatasetsRoutingModule,
    CountriesModule,
    MatCardModule,
    MatChipsModule
  ]
})
export class DatasetsModule { }
