/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  URL = 'http://localhost:3000/leaguestats/';
  constructor() {}

  async getData(url: string) {
    console.log(`${this.URL}${url}`);
    return await fetch(`${this.URL}${url}`).then((response) => response.json());
  }

  async postData(url: string, bodyData: any) {
    console.log(bodyData);
    return await fetch(`${this.URL}${url}`, {
      method: 'POST',
      body: JSON.stringify(bodyData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  async getSummoner(url: string, _id: string) {
    return await fetch(`${this.URL}${url}/${_id}`).then((response) =>
      response.json()
    );
  }

  async getChampion(url: string, _id: string) {
    return await fetch(`${this.URL}${url}/${_id}`).then((response) =>
      response.json()
    );
  }
}
