import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  constructor(
    private service: DataService
  ) { }

  name: string;
  ngOnInit(): void {
    this.service.presentFeedback('Hello', 'success');
  }

  searchButtonClicked() {

    // bilder anzeigen
    // name speichern
  }

}
