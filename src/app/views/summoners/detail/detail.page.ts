/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-unused-expressions */
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
  _id;
  champ: any = {};
  champions: any = [];
  newChamps: any = [];
  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private loadingController: LoadingController
  ) {}

  async ngOnInit() {
    this.presentLoading();
    this.methodsInit();
  }

  async getChampions() {
    await this.apiService.getData('champions').then((data) => {
      this.champions = data.Champions;
    });
  }

  async methodsInit() {
    this.route.params.subscribe((params) => {
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this._id = params['id'];
    });

    await this.getChampions();

    await this.apiService.getSummoner('summoners', this._id).then((data) => {
      this.champ = data.Summoner;
    });

    await this.champ.champions.forEach((element, i) => {
      this.newChamps.push(
        this.champions.find((arg) => arg._id === element._id)
      );
    });

    this.champ.champions = this.newChamps;
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class custom-loading',
      message: 'Please wait...',
      duration: 2000,
      translucent: true,
    });
    await loading.present();
  }
}
