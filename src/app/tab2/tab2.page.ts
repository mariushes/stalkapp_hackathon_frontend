import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public accounts: Array<string>;

  constructor() {}

  ngOnInit() {
    this.accounts = new Array<string>();
    this.accounts.push("person1");
    this.accounts.push("person2");
    this.accounts.push("person3");
  }

  addAccount(){
    // for()
    //   this.accounts.push();
  }
}
