import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DataService } from '../data.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

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
    private iab: InAppBrowser
  ) { }

  ngOnInit() {
  }

}
