import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.scss';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import {
	RecoilRoot,
} from 'recoil';

ReactDOM.render(
	<ChakraProvider>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</ChakraProvider>,
	document.getElementById('root')
);
