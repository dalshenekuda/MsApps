import { createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {imageListReducer} from "./reducers/imageReducers";

const defaultState = {
    // category:{
    //     name:'work'
    // }
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    imageList: imageListReducer,
    // category:categoryReducer
})
// const reducer = (defaultState)=>{}
const store = createStore(

    reducer,
    defaultState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;