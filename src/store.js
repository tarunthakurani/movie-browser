import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import rootReducer from  './reducers';
import thunkMiddleware from 'redux-thunk';


export default(initialState) => {
    const reduc = combineReducers({
      ...rootReducer
    });
    return createStore(reduc, {}, compose(
		applyMiddleware(
			thunkMiddleware,
		),
		// Enable redux devtools
		typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
				window.devToolsExtension() : f => f
	) );
}
