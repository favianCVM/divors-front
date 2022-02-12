import React from 'react';
import {
	Box,
	useColorModeValue,
	useDisclosure,
	useToast,
	Flex
} from '@chakra-ui/react';
import history from '@utils/history';
import NavbarWithHeader from '@components/layout/NavbarWithHeader';
import MobileDrawer from '@components/layout/MobileDrawer';
import SidebarContent from '@components/layout/SidebarContent';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '@actions/';

const Layout = ({
	children,
	isLogged = false,
	userType = 'admin',
	userName = '',
	actions
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();

	const handleLogOut = async () => {
		let response = await actions.logOut();

		if (response.success) history.push('/login');
		else
			toast({
				title: 'Error al logOut',
				status: 'error'
			});
	};

	return (
		<Box w="full" minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
			{/* contenido del sidebar para desktop */}

			{/* esto para mobile */}
			<MobileDrawer userType={userType} isOpen={isOpen} onClose={onClose} />

			{isLogged && (
				<NavbarWithHeader
					handleLogOut={handleLogOut}
					userName={userName}
					onOpen={onOpen}
				/>
			)}

			<Flex>
				{isLogged && (
					<SidebarContent
						onClose={() => onClose}
						userType={userType}
						display={{ base: 'none', md: 'block' }}
					/>
				)}

				<Box
					w={
						isLogged
							? {
									base: 'full',
									md: '80%',
									lg: '85%'
							  }
							: 'full'
					}
				>
					{children}
				</Box>
			</Flex>
		</Box>
	);
};

const mapStateToProps = (state) => ({
	isLogged: state.auth.get('logged') && state.auth.get('token'),
	userType: state.auth.get('userType'),
	userName: state.auth.get('userName')
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
