import App from 'App';
import 'assets/css/all.min.css';
import 'assets/css/App.css';
import 'assets/css/index.css';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'store';
import setupAxios from 'store/setupAxios';
import { SWRConfig } from 'swr';
import { swrConfig } from 'utilities';

setupAxios(axios, store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>

				<SWRConfig
					value={swrConfig}
				>
					<App />
				</SWRConfig>
			</PersistGate>
		</Provider>
		<ToastContainer />
	</React.StrictMode>
);