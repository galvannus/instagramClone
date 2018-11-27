import { createStore, combineReducers } from 'redux';

const reducerPrueba = (state = [0], action) => {
    switch (action.type) {
        case 'AUMENTAR_REDUCER_PRUEBA':
            return [...state, 1];
            break;

        default:
            return state;
            break;
    }
};

const reducers = combineReducers({
    reducerPrueba,
});

const store = createStore(reducers);

export default store;