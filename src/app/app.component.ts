import { Component, OnInit } from '@angular/core';
import cities from 'cities.json';
import { WeatherapiService } from './weatherapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'BonnieClyde-SimpleWeather';
  cities: any;
  selectedCity: any;
  ciudadesAgregadas: any;
  weatherApi: WeatherapiService;
  currentCity: any;
  showCurrentCity: any = false;

  constructor( weatherApi: WeatherapiService) {
    this.ciudadesAgregadas = [];
    this.weatherApi = weatherApi;
  }

  // ciudad.daily.data[1].summary
  ngOnInit() {
    this.cities = cities;
    console.log(this.cities);
  }

  printSelectedCity() {
    console.log(this.selectedCity);
  }

  selectCurrentCity(ciudad) {
    this.currentCity = ciudad;
    this.showCurrentCity = true;
    console.log(this.currentCity);
  }

  goBack() {
    this.showCurrentCity = false;
  }

  addCity() {
    this.weatherApi.getCity(+this.selectedCity.lat, +this.selectedCity.lng)
    .toPromise()
    .then( data => {
      this.ciudadesAgregadas.push({...data, name: this.selectedCity.name});
      console.log(this.ciudadesAgregadas);
    } );
  }

}
