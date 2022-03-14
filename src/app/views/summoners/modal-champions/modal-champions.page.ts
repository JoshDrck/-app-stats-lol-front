/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Champion } from 'src/app/models/champion';

@Component({
  selector: 'app-modal-champions',
  templateUrl: './modal-champions.page.html',
  styleUrls: ['./modal-champions.page.scss'],
})
export class ModalChampionsPage implements OnInit {
  @Input() champions: any;
  championsSelected: Array<Champion> = [];
  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) {}
  ngOnInit() {
    console.log('Hola Mundo :D!');
  }

  async selectChamp(_id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar seleccion',
      message: 'Desea seleccionar este campeon?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Seleccionar',
          id: 'confirm-button',
          handler: () => {
            this.champions.forEach((element) => {
              element._id === _id ? this.championsSelected.push(element) : '';
            });
          },
        },
      ],
    });

    await alert.present();
  }
  cancelarSeleccion() {
    this.modalController.dismiss({
      champions: [],
    });
  }
  guardarSeleccion() {
    this.modalController.dismiss({
      champions: this.championsSelected,
    });
  }
}
