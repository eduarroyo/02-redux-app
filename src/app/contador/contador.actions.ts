import { Action, createAction } from '@ngrx/store';

export enum ActionTypes {
    Incrementar = '[Contador] Incrementar',
    Decrementar = '[Contador] Decrementar',
    Restablecer = '[Contador] Restablecer'
}

export class Incrementar implements Action {
    readonly type = ActionTypes.Incrementar;
}

export class Decrementar implements Action {
    readonly type = ActionTypes.Decrementar;
}

export class Restablecer implements Action {
    readonly type = ActionTypes.Restablecer;
}