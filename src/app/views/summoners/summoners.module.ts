import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SummonersPageRoutingModule } from './summoners-routing.module';

import { SummonersPage } from './summoners.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SummonersPageRoutingModule
  ],
  declarations: [SummonersPage]
})
export class SummonersPageModule {}
