import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { restablecer } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html'
})
export class NietoComponent {

  contador!: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(contador => this.contador=contador);
  }

  restablecer() {
    this.store.dispatch(restablecer());
  }
}
