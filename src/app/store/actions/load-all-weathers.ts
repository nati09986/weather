import {AppAction} from './action';
import {Weather} from '../../entities/weather';

export const LOAD_WEATHERS = 'LOAD_WEATHERS';

export const loadWeathers = ((data: Weather[]) => ({
  type: LOAD_WEATHERS,
  payload: data
}));

export function weathersReducer(state = [], action: AppAction) {
  switch (action.type) {
    case LOAD_WEATHERS:
      return [...action.payload];
    default:
      return state;
  }
}
