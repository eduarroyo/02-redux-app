import { Action } from "@ngrx/store";
import { ActionTypes, Incrementar } from "./contador.actions";

export function contadorReducer(state: number = 10, action: Action) {

    switch(action.type) {

        case ActionTypes.Incrementar:
            return state +1;
        case ActionTypes.Decrementar:
            return state -1;
        case ActionTypes.Restablecer:
            return 0;
            
        default: 
            return state
    }

}