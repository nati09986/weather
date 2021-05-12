import {AppAction} from '../actions/action';
import {appReducer} from './app-reducer';

export const rootReducer = (state: any, action: AppAction) => {
    if (action.type === 'RESET_SYNCED_DATA') {
        action.payload = state;
        state = undefined;
    }

    if (action.normalizeSchema) {
        action.payload = state;
    }

    return appReducer(state, action);
};
