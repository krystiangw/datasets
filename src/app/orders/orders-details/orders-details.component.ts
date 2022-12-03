import { CountryDataServiceService } from './../../countries/country-data.service.service';
import { DatasetsDataService } from './../../datasets/datasets-data.service';
import { OrdersDataService } from './../orders-data.service';
import { map, switchMap, combineLatest } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss']
})
export class OrdersDetailsComponent {
  orderId$ = this.route.params;
  order$ = this.orderId$.pipe(
    switchMap(params => this.ordersDataService.getOrder(params['id']))
  );

  datasets$ = combineLatest([
    this.order$,
    this.datasetsDataService.getDatasets()
  ]).pipe(
    map(([order, datasets]) => datasets.filter(dataset => order.datasetIds.includes(dataset.id)))
  );

  countries$ = combineLatest([
    this.order$,
    this.countryDataServiceService.getCountries()
  ]).pipe(
    map(([order, countries]) => countries.filter(country => order.countries.includes(country.countryCode)))
  );

  constructor(
    private route: ActivatedRoute,
    private ordersDataService: OrdersDataService,
    private datasetsDataService: DatasetsDataService,
    private countryDataServiceService: CountryDataServiceService
  ) {

  }
}
