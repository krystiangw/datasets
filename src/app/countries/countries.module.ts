import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrySelectionComponent } from './country-selection/country-selection.component';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [
    CountrySelectionComponent,
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatCardModule
  ],
  exports: [
    CountrySelectionComponent
  ]
})
export class CountriesModule { }
