import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore } from 'redux-persist';
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import rootReducer from './reducers';
import {SECRET_KEY} from '../Secret';

const transformed = encryptTransform({
//	secretKey: process.env.REACT_APP_SECRET_KEY,
	secretKey: SECRET_KEY,
	onError: function (error) {
		// Handle the error.
	},
});

const persistConfig = {
	key: 'root',
	storage,
	transforms: [transformed],
	whitelist: ['auth', 'cart', 'shop']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);

export default store;