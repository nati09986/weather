import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Weather} from '../../../entities/weather';
import {storeService} from '../../../services/store-service';
import {loadWeathers} from '../../../store/actions/load-all-weathers';

@Component({
  selector: 'app-weather-by-city',
  templateUrl: './weather-by-city.component.html',
  styleUrls: ['./weather-by-city.component.scss']
})
export class WeatherByCityComponent implements OnInit {
  weatherChecks = [new Weather('', '', '', '', '')];

  @Output() newWeatherEvent = new EventEmitter<Weather>();

  constructor() {
  }

  ngOnInit(): void {
  }

  addWeatherCheck(weather: Weather) {
    this.weatherChecks.push(weather);
    this.addNewWeather(weather);
  }

  addNewWeather(weather: Weather): void {
    storeService.dispatch(loadWeathers(this.weatherChecks));
    this.newWeatherEvent.emit(weather);
  }
}
