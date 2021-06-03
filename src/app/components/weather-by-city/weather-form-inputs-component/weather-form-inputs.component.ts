import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Weather} from '../../../entities/weather';
import {ApiService} from '../../../services/api-service/api.service';
import {storeService} from '../../../services/store-service';
import {StoreDataTypeEnum} from '../../../store/storeDataTypeEnum';

@Component({
  selector: 'app-weather-form-inputs',
  templateUrl: './weather-form-inputs.component.html',
  styleUrls: ['./weather-form-inputs.component.css']
})
export class WeatherFormInputsComponent implements OnInit {
  weatherForm: FormGroup;
  cities = [];
  weather: Weather;

  @Output() newWeatherEvent = new EventEmitter<Weather>();

  constructor(public fb: FormBuilder,
              public apiService: ApiService) {
    this.weatherForm = fb.group({
      cityForm: [null, [Validators.required]],
      unitForm: [null, [Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
    this.getCitiesNames().forEach((city: string, index) => {
      this.cities.push({value: index, label: city});
    });
  }

  getCitiesNames(): string[] {
    return ['Kyiv', 'Tel Aviv'];
  }

  onSubmit(): void {
    this.inputIsValid() ? this.showWeather() : console.log(this.weatherForm.errors);
  }

  inputIsValid(): boolean {
    return this.weatherForm.valid;
  }

  showWeather(): void {
    this.apiService.getWeatherByCityAndUnit(this.getCitiesNames()[this.weatherForm.value.cityForm], this.weatherForm.value.unitForm)
      .subscribe(
        data => {
          this.weather = new Weather(this.getCitiesNames()[this.weatherForm.value.cityForm], this.weatherForm.value.unitForm,
            data.main.temp, data.weather[0].description, data.weather[0].icon);
        },
        () => {
          this.weather = storeService.select(StoreDataTypeEnum.WEATHERS).find((weather: Weather) =>
            weather.city === this.getCitiesNames()[this.weatherForm.value.cityForm] && this.weatherForm.value.unitForm === weather.unit);
        },
        () => {
          this.addNewWeather(this.weather);
        });
  }

  addNewWeather(value: Weather): void {
    this.newWeatherEvent.emit(value);
  }
}
