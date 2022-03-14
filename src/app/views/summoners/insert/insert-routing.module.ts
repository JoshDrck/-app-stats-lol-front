import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalChampionsPage } from '../modal-champions/modal-champions.page';

import { InsertPage } from './insert.page';

const routes: Routes = [
  {
    path: '',
    component: InsertPage,
  },
];

@NgModule({
  entryComponents: [ModalChampionsPage],

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertPageRoutingModule {}
