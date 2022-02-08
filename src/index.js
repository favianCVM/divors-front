import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.scss';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

import configureStore from './state/index';
import { Provider } from 'react-redux';

// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({});

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<Provider store={configureStore()}>
			<App />
		</Provider>
	</ChakraProvider>,
	document.getElementById('root')
);
