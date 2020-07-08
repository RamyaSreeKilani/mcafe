import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcknowledgementPageRoutingModule } from './acknowledgement-routing.module';

import { AcknowledgementPage } from './acknowledgement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcknowledgementPageRoutingModule
  ],
  declarations: [AcknowledgementPage]
})
export class AcknowledgementPageModule {}
