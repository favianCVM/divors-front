import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.scss';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

import configureStore from './state/index';
import { Provider } from 'react-redux';

ReactDOM.render(
	<ChakraProvider>
		<Provider store={configureStore()}>
			<App />
		</Provider>
	</ChakraProvider>,
	document.getElementById('root')
);
