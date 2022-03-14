import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-summoners',
  templateUrl: './summoners.page.html',
  styleUrls: ['./summoners.page.scss'],
})
export class SummonersPage implements OnInit {
  listSummoner: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getSummoners();
  }

  getSummoners() {
    this.apiService.getData('summoners').then((data) => {
      this.listSummoner = data.Summoners;
    });
  }
}
