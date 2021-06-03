import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFormInputsComponent } from './weather-form-inputs.component';

describe('WeatherFormInputsComponent', () => {
  let component: WeatherFormInputsComponent;
  let fixture: ComponentFixture<WeatherFormInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherFormInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherFormInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
