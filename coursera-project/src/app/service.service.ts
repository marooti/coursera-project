import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  getHeros() {
    let data = [
      {
        user: "Imran"
      },
      {
        user: "umer"
      },
      {
        user: "osama"
      },

    ]
    return data;
  }
}
