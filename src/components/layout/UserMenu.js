import React from 'react';
import {
	IconButton,
	Avatar,
	Box,
	Flex,
	HStack,
	VStack,
	useColorModeValue,
	Text,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	useColorMode,
	Center,
	Stack
} from '@chakra-ui/react';
import {
	BsBell,
	BsChevronDown,
	BsFillSunFill,
	BsFillMoonFill,
	BsBasket
} from 'react-icons/bs';

const UserMenu = ({ userName = '', handleLogOut = () => {} }) => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<HStack spacing={4} alignItems="center">
			<IconButton
				display={{
					base: 'none',
					md: 'flex'
				}}
				icon={<BsBell />}
			/>
			<IconButton
				display={{
					base: 'none',
					md: 'flex'
				}}
				icon={<BsBasket />}
			/>
			<Menu>
				<MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
					<HStack spacing={1} flexDir="row">
						<Avatar
							size={'sm'}
							src={
								'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
							}
						/>
						<VStack
							display={{ base: 'none', md: 'flex' }}
							alignItems="flex-start"
							spacing="1px"
							ml="2"
						>
							<Text fontSize="sm">{userName}</Text>
						</VStack>
						<Box display={{ base: 'none', md: 'flex' }}>
							<BsChevronDown />
						</Box>
					</HStack>
				</MenuButton>
				<MenuList
					bg={useColorModeValue('white', 'gray.900')}
					borderColor={useColorModeValue('gray.200', 'gray.700')}
				>
					<CustomMenuItem
						onClick={toggleColorMode}
						name="aspecto"
						Icon={colorMode === 'light' ? BsFillSunFill : BsFillMoonFill}
					/>
					<MenuDivider />
					<CustomMenuItem onClick={handleLogOut} name="cerrar sesion" />
				</MenuList>
			</Menu>
		</HStack>
	);
};

const CustomMenuItem = ({ onClick = () => {}, name = '', Icon = null }) => (
	<MenuItem
		_hover={{
			bg: 'gray.300'
		}}
		onClick={onClick}
		display="flex"
		justifyContent="space-between"
	>
		{name} {Icon && <Icon />}
	</MenuItem>
);
export default UserMenu;
