import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Weather} from '../../../entities/weather';

@Component({
  selector: 'app-weather-by-city',
  templateUrl: './weather-by-city.component.html',
  styleUrls: ['./weather-by-city.component.scss']
})
export class WeatherByCityComponent implements OnInit {
  weatherChecks = [''];

  @Output() newWeatherEvent = new EventEmitter<Weather>();

  constructor() {
  }

  ngOnInit(): void {
  }

  addWeatherCheck(weather: Weather) {
    this.weatherChecks.push('weatherCheck');
    this.addNewWeather(weather);
  }

  addNewWeather(weather: Weather): void {
    this.newWeatherEvent.emit(weather);
  }
}
