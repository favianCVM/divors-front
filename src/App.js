import React from 'react';
import Router from 'config/Router';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useColorMode } from '@chakra-ui/react';

import * as actions from '@actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function App({ actions, isLogged }) {
	React.useEffect(() => {
		if (isLogged) {
			checkSessionState();
		}
	}, []);
	const { colorMode, toggleColorMode } = useColorMode();

	const checkSessionState = async () => {
		let response = await actions.checkSessionState();
	};

	return (
		<>
			<Router></Router>
			<button onClick={toggleColorMode}>aver</button>
		</>
	);
}

const mapStateToProps = (state) => ({
	isLogged: state.auth.get('logged') && state.auth.get('token')
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
