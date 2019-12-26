import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Place } from '../_models/place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPlaces() {
    return this.http.get<Place[]>(this.baseUrl + 'places');
  }
}
