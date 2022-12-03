import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dataset } from './models/dataset.model';

@Injectable({
  providedIn: 'root'
})
export class DatasetsDataService {

  constructor(private httpClient: HttpClient) {}

  getDatasets(): Observable<Dataset[]> {
    return this.httpClient.get(environment.apiUrl + '/datasets') as Observable<Dataset[]>;
  }
}
