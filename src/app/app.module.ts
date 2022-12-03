import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { OrdersModule } from './orders/orders.module';
import { DatasetsModule } from './datasets/datasets.module';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { NgHttpCachingModule, NgHttpCachingConfig } from 'ng-http-caching';

const ngHttpCachingConfig: NgHttpCachingConfig = {
  lifetime: 1000 * 10
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DatasetsModule,
    HttpClientModule,
    OrdersModule,
    DatasetsModule,
    NgHttpCachingModule.forRoot(ngHttpCachingConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
