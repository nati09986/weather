import { Store,  createStore } from 'redux';
import {rootReducer} from '../store/reducers/root-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

export class StoreService {
    public store: Store;

    constructor() {
        this.store = createStore(rootReducer, composeWithDevTools());
    }

    public dispatch(data: any): void {
        this.store.dispatch(data);
    }

    public select(data: string): any[] {
        return this.store.getState()[data];
    }
}

export const storeService = new StoreService();
