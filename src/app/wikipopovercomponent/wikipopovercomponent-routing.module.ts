import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WikipopovercomponentPage } from './wikipopovercomponent.page';

const routes: Routes = [
  {
    path: '',
    component: WikipopovercomponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WikipopovercomponentPageRoutingModule {}
