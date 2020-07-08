import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatlogPageRoutingModule } from './catlog-routing.module';

import { CatlogPage } from './catlog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatlogPageRoutingModule
  ],
  declarations: [CatlogPage]
})
export class CatlogPageModule {}
