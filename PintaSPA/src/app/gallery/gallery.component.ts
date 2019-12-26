import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../_services/places.service';
import { Place } from '../_models/place';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  places: Place[];

  constructor(private placesservice: PlacesService) { }

  ngOnInit() {
  }

  getPlaces() {
    this.placesservice.getPlaces()
      .subscribe(places => {
        this.places = places;
      }, error => {
        console.log(error);
      });
  }

}
