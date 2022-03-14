import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalChampionsPageRoutingModule } from './modal-champions-routing.module';

import { ModalChampionsPage } from './modal-champions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalChampionsPageRoutingModule
  ],
  declarations: [ModalChampionsPage]
})
export class ModalChampionsPageModule {}
