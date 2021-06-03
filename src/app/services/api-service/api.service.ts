import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private path = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private appId = '&appid=0d7303c17ee3d3482cd82a2ad273a90d';

  constructor(private http: HttpClient) {
  }

  public getWeatherByCityAndUnit(city: string, unit: string): Observable<any> {
    return this.http.get(this.path + city + '&units=' + unit + this.appId);
  }
}

