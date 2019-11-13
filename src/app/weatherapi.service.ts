import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getCity(lat: number, lng: number) {
    return this.http.get(this.apiUrl + lat + ',' + lng);
  }

}
