import { Component } from '@angular/core';
import { combineLatest, Observable, map } from 'rxjs';
import { CountryDataServiceService } from '../country-data.service.service';
import { Country } from '../models/country.model';

@Component({
  selector: 'app-country-selection',
  templateUrl: './country-selection.component.html',
  styleUrls: ['./country-selection.component.scss']
})
export class CountrySelectionComponent {

  selection$: Observable<Array<{ country: Country, selected: boolean;}>> = combineLatest([
    this.countryDataServiceService.getCountries(),
    this.countryDataServiceService.selectedCountries$
  ]).pipe(map(([countries, selectedCountries]) => {
    const selectedCountriesCodes = selectedCountries.map(country => country.countryCode);
    return countries.map(country => {
      return {
        country,
        selected: selectedCountriesCodes.includes(country.countryCode)
      };
    });
  }));

  constructor(private countryDataServiceService: CountryDataServiceService) {  }


  selectionChange(item: Country) {
    this.countryDataServiceService.selectCountry(item);
  }
}
