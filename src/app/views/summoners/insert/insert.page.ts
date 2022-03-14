/* eslint-disable no-underscore-dangle */
/* eslint-disable quote-props */
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';
import { ModalChampionsPage } from '../modal-champions/modal-champions.page';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {
  form;
  etiquetasSelected: any = [];
  listChampions: any = [];
  listChampionsSelected: any = [];
  partypes: any = ['Pozo Sangriento', 'Energía', 'Maná', 'Flujo'];
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private modalController: ModalController
  ) {
    this.form = formBuilder.group({
      _id: [''],
      name: [''],
      icon: [''],
      lvl: [''],
      champions: [[]],
      leagueTier: [''],
      queueLine: [''],
      leaguePoints: 0,
      wins: 0,
      losses: 0,
    });
  }
  ngOnInit() {
    this.apiService.getData('champions').then((data) => {
      this.listChampions = data.Champions;
    });
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalChampionsPage,
      componentProps: {
        champions: this.listChampions,
      },
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    this.listChampionsSelected = [...data.champions];
  }
  submit() {
    console.log(this.form.value);
    this.listChampionsSelected.forEach((element) => {
      this.form.value.champions.push({ _id: element._id });
    });
    this.apiService.postData('summoners', this.form.value).then((data) => {
      console.log(data);
    });
  }

  resetForm() {
    this.form.reset();
  }
}
