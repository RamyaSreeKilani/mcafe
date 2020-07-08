import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatlogPage } from './catlog.page';

const routes: Routes = [
  {
    path: '',
    component: CatlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatlogPageRoutingModule {}
