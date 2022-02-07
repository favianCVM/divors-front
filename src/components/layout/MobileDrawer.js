import React from 'react';
import { Drawer, DrawerContent } from '@chakra-ui/react';
import SidebarContent from '@components/layout/SidebarContent';

const MobileDrawer = ({
	userType = '',
	isOpen = false,
	onClose = () => {}
}) => {
	return (
		<Drawer
			autoFocus={false}
			isOpen={isOpen}
			placement="left"
			onClose={onClose}
			returnFocusOnClose={false}
			onOverlayClick={onClose}
			size="full"
		>
			<DrawerContent>
				<SidebarContent onClose={onClose} userType={userType} />
			</DrawerContent>
		</Drawer>
	);
};

export default MobileDrawer;
