import { Component, OnInit } from '@angular/core';
import { Storage, StorageConfigToken } from '@ionic/storage';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public accounts: Array<string> = new Array<string>();
  
  constructor(
    //private accounts: Array<Storage>, 
    private service: DataService
  )  { }

  ngOnInit() {
    this.service.reaData("searchHistory").then( usernameArray => {
      console.log(usernameArray),
      this.accounts.push(usernameArray);
    })
  }

}
