import React from 'react';
import {
	Box,
	useColorModeValue,
	Drawer,
	DrawerContent,
	useDisclosure,
	useToast
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
		<Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
			{isLogged && (
				<>
					{/* esto para mobile */}
					<MobileDrawer userType={userType} isOpen={isOpen} onClose={onClose} />

					{/* contenido del sidebar para desktop */}
					<SidebarContent
						onClose={() => onClose}
						userType={userType}
						display={{ base: 'none', md: 'block' }}
					/>

					{/* header del navbar, tambien para mobile */}
					<NavbarWithHeader
						handleLogOut={handleLogOut}
						userName={userName}
						onOpen={onOpen}
					/>
				</>
			)}

			<Box>{children}</Box>
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
