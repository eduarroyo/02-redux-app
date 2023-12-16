import { Action, createReducer, on } from '@ngrx/store';
import { incrementar, decrementar, multiplicar, dividir, reset } from './contador.actions';
import { AppState } from '../app.reducers';


export const initialState = 20;

const _contadorReducer = createReducer(initialState,
    on( incrementar, state => state + 1),
    on( decrementar, state => state - 1),
    on( reset      , state => initialState )
);

export function contadorReducer(state: number = initialState, action: Action) {
    return _contadorReducer(state, action);
}