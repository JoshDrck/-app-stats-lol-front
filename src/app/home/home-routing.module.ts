import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'summoners',
        loadChildren: () =>
          import('../views/summoners/summoners.module').then(
            (m) => m.SummonersPageModule
          ),
      },
      {
        path: 'champions',
        loadChildren: () =>
          import('../views/champions/champions.module').then(
            (m) => m.ChampionsPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/home/champions',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home/champions',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class HomePageRoutingModule {}
