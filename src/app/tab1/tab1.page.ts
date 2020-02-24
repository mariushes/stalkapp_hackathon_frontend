import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PopoverController } from '@ionic/angular';
import { WikipopovercomponentPage } from '../wikipopovercomponent/wikipopovercomponent.page';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public pictures: any;
  // public name: string;
  constructor(
    private service: DataService,
    public popoverController: PopoverController
  ) { }

  name: string;

  ngOnInit(): void {
  }

  async pictureButtonClicked(picture: string) {
    const popover = await this.popoverController.create({
      component: WikipopovercomponentPage,
      componentProps: {
        passedData: picture
      },
      translucent: true
    });
    return await popover.present();
  }

  searchButtonClicked() {
    if (this.name === undefined || this.name.length === 0) {
      alert('Please insert a name!');
      return;
    }

    // save name in search history
    this.service.reaData('searchHistory').then(async data => {

      console.log(data);
      if (data === undefined) {
        data = new Array(this.name);
      } else {
        data.push(this.name);
      }

      this.service.persistData('searchHistory', data);
    });

    // show pictures
    this.pictures = this.service.getPicturesByInstagramUsername(this.name);

  }

}
