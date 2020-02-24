import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ɵNAMESPACE_URIS } from '@angular/platform-browser';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public pictures: any;
  //public name: string;
  constructor(
    private service: DataService
  ) { }

  name: string;

  ngOnInit(): void {
    this.service.presentFeedback('Hello', 'success');
  }

  pictureButtonClicked(picture: string){
    this.service.getWikipediaContentByPicture(picture);
  }

  searchButtonClicked() {
    if(this.name==undefined || this.name.length==0){
      alert('Please insert a name!');
      return;
    }

    // save name in search history
    this.service.reaData('searchHistory').then(async data => {
      
 console.log(data);
if(data==undefined){
data = new Array(this.name);
}else{
  data.push(this.name);
}

 this.service.persistData('searchHistory', data )
    });

    //this.service.reaData('searchHistory').then(data => {
      //console.log(data);
    //})

    // show pictures
    this.pictures = this.service.getPicturesByInstagramUsername(this.name);
  
  }

}
