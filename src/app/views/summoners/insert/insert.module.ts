import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertPageRoutingModule } from './insert-routing.module';

import { InsertPage } from './insert.page';
import { ModalChampionsPage } from '../modal-champions/modal-champions.page';

@NgModule({
  entryComponents: [ModalChampionsPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [InsertPage],
})
export class InsertPageModule {}
