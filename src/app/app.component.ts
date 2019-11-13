import { Component, OnInit } from '@angular/core';
import cities from 'cities.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'BonnieClyde-SimpleWeather';

  ngOnInit() {

    console.log(cities);

  }

}
