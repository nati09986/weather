import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './components/navbar-component/navbar.component';
import {WeatherByCityComponent} from './components/weather-by-city/weather-by-city-component/weather-by-city.component';
import {InputUtilitiesModule, MDBBootstrapModulesPro} from 'ng-uikit-pro-standard';
import {WeatherResultsComponent} from './components/weather-by-city/weather-results-component/weather-results.component';
import {WeatherFormInputsComponent} from './components/weather-by-city/weather-form-inputs-component/weather-form-inputs.component';
import { WeatherSummaryComponent } from './components/weather-summary-component/weather-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherByCityComponent,
    WeatherResultsComponent,
    WeatherResultsComponent,
    WeatherFormInputsComponent,
    WeatherSummaryComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModulesPro.forRoot(),
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InputUtilitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
