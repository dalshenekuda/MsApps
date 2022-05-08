import { createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {imageListReducer} from "./reducers/imageReducers";

//if we have some state as a default we can place it here
const defaultState = {
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//combineReducers combine our reducers, we can create new and add there
//it will be passed to
const reducer = combineReducers({
    imageList: imageListReducer,
})

// redux store to store global states
//we can take data from store using useSelector
const store = createStore(
    reducer,
    defaultState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;