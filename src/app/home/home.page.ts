import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public valor = 0;
  constructor() {}
  
  public increment () {
    this.valor++
  }

  public decrement () {
    this.valor--
  }

}
