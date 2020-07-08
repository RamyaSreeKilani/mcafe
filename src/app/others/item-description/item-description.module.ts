import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDescriptionPageRoutingModule } from './item-description-routing.module';

import { ItemDescriptionPage } from './item-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDescriptionPageRoutingModule
  ],
  declarations: [ItemDescriptionPage]
})
export class ItemDescriptionPageModule {}
