import {Action} from 'redux';
import {Schema} from 'normalizr';

export interface AppAction<T = any> extends Action {
    payload: T;
    normalizeSchema?: Schema;
}
