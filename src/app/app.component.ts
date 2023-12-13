import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementar } from './contador/contador.actions';

interface AppState {
  contador:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'redux-app';

  contador: number = 0;

  constructor(private store: Store<AppState>) {

    this.store.subscribe(state => {
      console.log(state);
    });
  }

  incrementar() {
    this.store.dispatch(incrementar);
  }

  decrementar() {
  }

}
