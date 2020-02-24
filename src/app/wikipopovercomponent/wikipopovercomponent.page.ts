import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-wikipopovercomponent',
  templateUrl: './wikipopovercomponent.page.html',
  styleUrls: ['./wikipopovercomponent.page.scss'],
})
export class WikipopovercomponentPage implements OnInit {

  wikipediaContent: any;
  constructor(
    private modalController: ModalController,
    private service: DataService,
    private navParams: NavParams,
  ) { }

  ngOnInit() {
    this.service.getWikipediaContentByPicture(this.navParams.get('passedData')).then(data => {
      this.wikipediaContent = data['wikipediaText'];
    }).catch(err => {
      this.service.presentFeedback('Error occured: ' + err, 'danger');
    });
  }

  cancel() {
    this.modalController.dismiss();
  }

}
