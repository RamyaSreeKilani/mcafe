import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemDescriptionPage } from './item-description.page';

const routes: Routes = [
  {
    path: '',
    component: ItemDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDescriptionPageRoutingModule {}
