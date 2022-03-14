import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.page.html',
  styleUrls: ['./champions.page.scss'],
})
export class ChampionsPage implements OnInit {
  listChampions: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getChampions();
  }

  getChampions() {
    this.apiService
      .getData('champions')
      .then((data) => {
        this.listChampions = data.Champions;
      });
  }
}
