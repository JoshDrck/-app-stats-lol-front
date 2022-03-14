/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Champion } from 'src/app/models/champion';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {
  champion: Champion;
  form;
  etiquetasSelected: any = [];

  etiquetas: any = [
    { nombre: 'Peleador', nameEn: 'Fighter', checked: false },
    { nombre: 'Tanque', nameEn: 'Tank', checked: false },
    { nombre: 'Asesino', nameEn: 'Assassin', checked: false },
    { nombre: 'Soporte', nameEn: 'Support', checked: false },
    { nombre: 'Mago', nameEn: 'Mage', checked: false },
    { nombre: 'Tirador', nameEn: 'Marksman', checked: false },
  ];
  partypes: any = ['Pozo Sangriento', 'Energía', 'Maná', 'Flujo'];
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.form = formBuilder.group({
      version: ['12.3.1'],
      _id: [''],
      key: 0,
      name: [''],
      title: [''],
      blurb: [''],
      info: formBuilder.group({
        attack: 0,
        defense: 0,
        magic: 0,
        difficulty: 0,
      }),
      image: formBuilder.group({
        pathIcon: [''],
        pathSplash: [''],
      }),
      tags: [[]],
      partype: [''],
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
    });
  }

  ngOnInit() {}

  changeState(isChecked, name) {
    console.log(name);
    this.etiquetas.forEach((element) => {
      element.nombre === name ? (element.checked = !isChecked) : '';
    });
  }

  submit() {
    this.etiquetas.forEach((element) => {
      this.form.value.tags.push(element.nameEn);
    });
    console.log(this.form.value);
    this.apiService.postData('champions', this.form.value).then((data) => {
      console.log(data);
    });
  }

  resetForm() {
    this.form.reset();
  }
}
