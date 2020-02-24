import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  name:string;
  constructor(
    private service: DataService,
  ) {}

  searchButtonClicked(){
    
    //bilder anzeigen
    //name speichern
  }

ngOnInit() {
  this.service.presentFeedback('Hello', 'success');

}

}
