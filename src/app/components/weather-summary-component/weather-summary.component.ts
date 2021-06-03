import {Component, Input, OnInit} from '@angular/core';
import {Weather} from '../../entities/weather';

@Component({
  selector: 'app-weather-summary',
  templateUrl: './weather-summary.component.html',
  styleUrls: ['./weather-summary.component.css']
})
export class WeatherSummaryComponent implements OnInit {
  weathers: Weather[] = [];


  @Input() set addWeather(weather: Weather) {
    this.addNewWeather(weather);
  }

  constructor() { }

  ngOnInit(): void {
  }

  addNewWeather(weather: Weather) {
    if (weather) {
      this.weathers.push(weather);
    }
  }
}
