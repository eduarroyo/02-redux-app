import { Action, createReducer, on, props } from '@ngrx/store';
import * as actions from './contador.actions';
import { AppState } from '../app.reducers';


export const initialState = 20;

const _contadorReducer = createReducer(initialState,
    on( actions.incrementar, state => state + 1),
    on( actions.decrementar, state => state - 1),
    on( actions.restablecer, state => initialState ),
    on( actions.multiplicar, (state, {numero}) => state * numero),
    on( actions.dividir, (state, {numero}) => state / numero)
);

export function contadorReducer(state: number = initialState, action: Action) {
    return _contadorReducer(state, action);
}