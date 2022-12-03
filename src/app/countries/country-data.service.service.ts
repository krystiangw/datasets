import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from './models/country.model';
@Injectable({
  providedIn: 'root'
})
export class CountryDataServiceService {

  private selectedCountries: Country[] = [];
  private selectedCountriesChange$: BehaviorSubject<Country[]> = new BehaviorSubject(this.selectedCountries);

  selectedCountries$: Observable<Country[]> = this.selectedCountriesChange$.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  getCountries(): Observable<Country[]> {
    return (this.httpClient.get(environment.apiUrl + '/countries') as Observable<Country[]>)
      .pipe(tap((data) => {
        if (this.selectedCountries.length === 0) {
          this.selectedCountries = [...data];
          this.selectedCountriesChange$.next(this.selectedCountries);
        }
      }));
  }

  selectCountry(country: Country) {
    const previouslySelected = this.selectedCountries.find(selectedCountry => selectedCountry.countryCode === country.countryCode);
    if (previouslySelected) {
      this.selectedCountries.splice(this.selectedCountries.indexOf(previouslySelected), 1);
    } else {
      this.selectedCountries.push(country);
    }


    this.selectedCountriesChange$.next([...this.selectedCountries]);
  }
}
