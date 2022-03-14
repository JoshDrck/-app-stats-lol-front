import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummonersPage } from './summoners.page';

const routes: Routes = [
  {
    path: '',
    component: SummonersPage,
  },
  {
    path: 'insert',
    loadChildren: () =>
      import('./insert/insert.module').then((m) => m.InsertPageModule),
  },
  {
    path: 'modal-champions',
    loadChildren: () =>
      import('./modal-champions/modal-champions.module').then(
        (m) => m.ModalChampionsPageModule
      ),
  },
  {
    path: 'detail',
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import('./detail/detail.module').then((m) => m.DetailPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummonersPageRoutingModule {}
