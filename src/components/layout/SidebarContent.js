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
	console.log(userType, routes);
	return (
		<Box
			// transition="3s ease"
			bg={useColorModeValue('white', 'gray.900')}
			borderRight="1px"
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
			w={{ base: 'full', md: '20%' }}
			minH="100vh"
			shadow={{
				md: 'md'
			}}
			{...props}
		>
			<Box
				position="sticky"
				top={{
					md: 24
				}}
			>
				<CloseButton
					size="lg"
					w="full"
					px="8"
					py="4"
					justifyContent="end"
					display={{ base: 'flex', md: 'none' }}
					onClick={onClose}
				/>

				{routes[userType]?.map((link) => (
					<LayoutItem key={`layout-item-${link.name}`} {...link} />
				))}
			</Box>
		</Box>
	);
};

export default SidebarContent;
