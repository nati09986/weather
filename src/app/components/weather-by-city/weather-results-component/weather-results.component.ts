import {Component, Input, OnInit} from '@angular/core';
import {Weather} from 'src/app/entities/weather';

@Component({
  selector: 'app-weather-results',
  templateUrl: './weather-results.component.html',
  styleUrls: ['./weather-results.component.css']
})
export class WeatherResultsComponent implements OnInit {
  weather: Weather;

  @Input() set setWeather(weather: Weather) {
    this.weather = weather;
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
