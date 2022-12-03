import { Country } from './../../countries/models/country.model';
import { DatasetWithOrders } from './../models/dataset.model';
import { OrdersDataService } from './../../orders/orders-data.service';
import { CountryDataServiceService } from './../../countries/country-data.service.service';
import { DatasetsDataService } from './../datasets-data.service';
import { map, Observable, switchMap, combineLatest } from 'rxjs';
import { Component } from '@angular/core';
import { uniqBy } from 'lodash';

@Component({
  selector: 'app-datasets-list',
  templateUrl: './datasets-list.component.html',
  styleUrls: ['./datasets-list.component.scss']
})
export class DatasetsListComponent {
  selectedCountries$ = this.countryDataServiceService.selectedCountries$;
  selectedCountriesNames$ = this.selectedCountries$.pipe(map(country => country.map(item => item.name)))

  datasets$: Observable<DatasetWithOrders[]> = combineLatest([
    this.datasetsDataService.getDatasets(),
    this.ordersDataService.getOrders(),
    this.countryDataServiceService.getCountries()
  ])
    .pipe(
      switchMap(([datasets, allOrders, allCountries]) => this.selectedCountries$
        .pipe(map(selectedCountries => {
          return datasets
            .map(dataset => {
              const orders = allOrders.filter(order => order.datasetIds.includes(dataset.id));
              const orderCountries: Country[] = uniqBy(
                orders
                  .flatMap(order => order.countries)
                  .map(countryCode => allCountries.find(country => country.countryCode === countryCode))
                  .filter(country => !!country) as Country[],
                'countryCode'
              );

              const availableRecords: number = orderCountries
                .filter(country => selectedCountries.length > 0 ?
                  !!selectedCountries.find(selectedCountry => selectedCountry.countryCode === country.countryCode) : true
                )
                .map(country => country.storedData
                .find(item => item.datasetId === dataset.id))
                .map(item => item?.recordCount ?? 0)
                .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

              return {
                dataset,
                orders,
                countries: orderCountries,
                availableRecords
              };
            })
            .filter(item => {
              if (selectedCountries.length === 0) {
                return true;
              }
              return item.orders.find(order => order.countries.find(countryCode => !!selectedCountries.find(country => country.countryCode === countryCode)));
            });
        }))
    )
  );


  constructor(
    private datasetsDataService: DatasetsDataService,
    private countryDataServiceService: CountryDataServiceService,
    private ordersDataService: OrdersDataService) {}

  ngOnInit(): void {

  }
}