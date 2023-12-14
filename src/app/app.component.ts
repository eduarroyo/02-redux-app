import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Decrementar, Incrementar } from './contador/contador.actions';
import { Observable } from 'rxjs';

interface AppState {
  contador:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'redux-app';

  contador$!: Observable<number>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.subscribe(state => {      
      this.contador$ = this.store.pipe(select('contador'));
    });
  }

  incrementar() {
    this.store.dispatch(new Incrementar());
  }

  decrementar() {
    this.store.dispatch(new Decrementar());
  }

}
