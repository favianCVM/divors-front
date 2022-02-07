import React from 'react';
import {
	Box,
	CloseButton,
	Flex,
	useColorModeValue,
	Text
} from '@chakra-ui/react';
import LayoutItem from '@components/layout/LayoutItem';
import routes from '@utils/routes';

const SidebarContent = ({ onClose = () => {}, userType = '', ...props }) => {
	return (
		<Box
			// transition="3s ease"
			bg={useColorModeValue('white', 'gray.900')}
			borderRight="1px"
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
			w={{ base: 'full', md: 60 }}
			pos="fixed"
			h="full"
			shadow={{
				md: 'md'
			}}
			{...props}
		>
			<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
				<Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
					Logo
				</Text>
				<CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
			</Flex>
			{routes[userType].map((link) => (
				<LayoutItem key={`layout-item-${link.name}`} {...link} />
			))}
		</Box>
	);
};

export default SidebarContent;
