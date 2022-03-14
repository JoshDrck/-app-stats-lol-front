/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  champs: any = {
    version: ['12.3.1'],
    _id: '',
    key: 0,
    name: '',
    title: '',
    blurb: '',
    info: [
      {
        attack: 0,
        defense: 0,
        magic: 0,
        difficulty: 0,
      },
    ],
    image: {
      pathIcon: '',
      pathSplash: '',
    },
    tags: [],
    partype: '',
    stats: {
      hp: 0,
      hpperlevel: 0,
      mp: 0,
      mpperlevel: 0,
      movespeed: 0,
      armor: 0,
      armorperlevel: 0,
      spellblock: 0,
      spellblockperlevel: 0,
      attackrange: 0,
      hpregen: 0,
      hpregenperlevel: 0,
      mpregen: 0,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 0,
      attackdamageperlevel: 0,
      attackspeedperlevel: 0,
      attackspeed: 0,
    },
  };
  _id;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private loadingController: LoadingController
  ) {}

  async ngOnInit() {
    this.route.params.subscribe((params) => {
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this._id = params['id'];
    });
    this.apiService.getChampion('champions', this._id).then((data) => {
      this.champs = data.Champions;
    });
  }
}
