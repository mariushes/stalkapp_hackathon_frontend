import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PopoverController, NavParams } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public pictures: any;
  public wikipediaContent: string;
  // public name: string;
  constructor(
    private service: DataService,
    public popoverController: PopoverController,
    private iab: InAppBrowser
  ) { }

  name: string;

  ngOnInit(): void {
  }


  searchButtonClicked() {
    if (this.name === undefined || this.name.length === 0) {
      alert('Please insert a name!');
      return;
    }

    // save name in search history
    this.service.reaData('searchHistory').then(async data => {
      if (data === undefined) {
        data = new Array(this.name);
      } else {
        data.push(this.name);
      }

      this.service.persistData('searchHistory', data);
    });

    // show pictures
    this.service.getPicturesByInstagramUsername(this.name).then(data => {
      this.pictures = data;
    }).catch(err => {
      this.service.presentFeedback('Error: ' + err, 'danger');
    });
  }


  async pictureButtonClicked(pictureUrl: string) {
    this.service.getWikipediaContentByPicture(pictureUrl).then(data => {
      this.iab.create(data + '', '_system');
    }).catch(err => {
      this.service.presentFeedback('Error occured: ' + err, 'danger');
    });
  }

}
