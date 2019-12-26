import { Component, OnInit } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {

  faQuoteLeft = faQuoteLeft;
  faCoffee = faCoffee;

  constructor() { }

  ngOnInit() {
  }

}
