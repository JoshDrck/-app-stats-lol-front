import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChampionsPage } from './champions.page';

const routes: Routes = [
  {
    path: '',
    component: ChampionsPage,
  },
  {
    path: 'insert',
    loadChildren: () =>
      import('./insert/insert.module').then((m) => m.InsertPageModule),
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
export class ChampionsPageRoutingModule {}
