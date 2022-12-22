import { tradeReducer } from "./tradeReducer";
import { createStore} from 'redux';
import {combineReducers} from 'redux';

const rootReducer =  combineReducers({
    tradeInfo: tradeReducer,    
})

export type RootState = ReturnType<typeof rootReducer>

export const store =  createStore(rootReducer)