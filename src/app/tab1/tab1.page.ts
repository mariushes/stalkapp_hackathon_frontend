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
    private service: DataService
  ) {

<<<<<<< HEAD
  }
=======
  searchButtonClicked(){
    
    //bilder anzeigen
    //name speichern
  }

ngOnInit() {
  this.service.presentFeedback('Hello', 'success');
>>>>>>> 60b1edec9bdb9764fd9d492a62e24080ac04021a

  ngOnInit() {
    this.service.presentFeedback('Hello', 'success');
  }

}
