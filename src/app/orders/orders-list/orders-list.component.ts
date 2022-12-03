import { CountryDataServiceService } from './../../countries/country-data.service.service';
import { Component, OnInit } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Order } from '../models/order.model';
import { OrdersDataService } from '../orders-data.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  selectedCountries$ = this.countryDataServiceService.selectedCountries$;
  selectedCountriesNames$ = this.selectedCountries$.pipe(map(country => country.map(item => item.name)))
  orders$: Observable<Order[]> = this.ordersDataService.getOrders()
    .pipe(
      switchMap(data => this.selectedCountries$
        .pipe(map(selectedCountries => {
          if (selectedCountries.length === 0) {
            return data;
          }
          return data.filter(order => !!order.countries.find(countryCode => !!selectedCountries.find(country => country.countryCode === countryCode)));
        }))
    )
  );


  constructor(private ordersDataService: OrdersDataService, private countryDataServiceService: CountryDataServiceService) {}

  ngOnInit(): void {

  }
}
