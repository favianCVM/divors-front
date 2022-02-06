import LoginForm from '@components/auth_form/LoginForm';
import {
	Heading,
	useToast,
	Box,
	Center,
	Button,
	useBoolean
} from '@chakra-ui/react';
import history from '@utils/history';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '@actions/index';

const LoginContainer = ({ actions }) => {
	const toast = useToast();

	const handleSubmit = async (values) => {
		let response = await actions.signIn(values);

		await toast({
			title: response.title || '',
			description: response.description || '',
			status: response.status,
			duration: 5000,
			isClosable: true
		});

		if (response.success) history.push('/');
	};

	return (
		<>
			<LoginForm handleSubmit={handleSubmit} />
		</>
	);
};

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(null, mapDispatchToProps)(LoginContainer);
