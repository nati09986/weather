import {combineReducers} from 'redux';
import {weathersReducer} from '../actions/load-all-weathers';
import {StoreDataTypeEnum} from '../storeDataTypeEnum';

export const appReducer = combineReducers({
  [StoreDataTypeEnum.WEATHERS]: weathersReducer
});
