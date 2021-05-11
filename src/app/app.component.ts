import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Weather} from './entities/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  newWeather: Weather;

  constructor(private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('weather');
  }

  newWeatherEvent(weather: Weather): void {
    this.newWeather = weather;
  }
}
