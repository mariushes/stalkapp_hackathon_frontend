import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WikipopovercomponentPageRoutingModule } from './wikipopovercomponent-routing.module';

import { WikipopovercomponentPage } from './wikipopovercomponent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WikipopovercomponentPageRoutingModule
  ],
  declarations: [WikipopovercomponentPage]
})
export class WikipopovercomponentPageModule {}
