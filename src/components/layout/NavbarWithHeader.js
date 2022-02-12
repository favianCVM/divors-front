import React from 'react';
import { Flex, useColorModeValue, Text } from '@chakra-ui/react';
import UserMenu from '@components/layout/UserMenu';
import SearchBar from '@components/layout/Searchbar';

const NavbarWithHeader = ({
	onOpen = () => {},
	userName = '',
	handleLogOut = () => {}
}) => {
	return (
		<Flex
			px={{ base: 4, md: 4 }}
			height="20"
			width="full"
			alignItems="center"
			bg={useColorModeValue('white', 'gray.900')}
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
			justifyContent="space-between"
			position="sticky"
			zIndex="sticky"
			top="0"
			shadow="md"
		>
			<Text display={{ base: 'none', md: 'inline' }}>
				esto deberia ser una vaina
			</Text>

			<SearchBar />

			<UserMenu userName={userName} handleLogOut={handleLogOut} />
		</Flex>
	);
};

export default NavbarWithHeader;
