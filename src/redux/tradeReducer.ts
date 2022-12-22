import { IState } from "./types"

let initialState:IState = {
    dealData: [],
    currentPrice: null,
    currentInstrument: '',
    isTradeModal: false,
    operationType: ''
}

 interface IAction  {
    type: string,
    payload: any,
}

export const tradeReducer = (state = initialState, action: IAction ):IState => {
    switch(action.type){

        case "CHANGE_OPTION": {
             return {...state , currentInstrument:action.payload}
        }
        case "MODAL_WINDOW_STATUS": {
            return {...state, isTradeModal: action.payload}
        }
        case "PICK_OPERATION_INFO":{
            return {...state, operationType: action.payload.operationType ,currentPrice: action.payload.price }
        }
        case "MAKE_DEAL":{
            return {...state, dealData:[...state.dealData , action.payload]}
        }
        default:
            return state
    }

}