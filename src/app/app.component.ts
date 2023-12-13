import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'redux-app';

  contador: number;

  constructor() {
    this.contador = 0;
  }

  incrementar() {
    this.contador += 1;
  }

  decrementar() {
    this.contador -= 1;
  }

  restablecer() {
    this.contador = 0;
  }


}
