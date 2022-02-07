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
	useColorMode
} from '@chakra-ui/react';
import {
	BsBell,
	BsFillBagFill,
	BsChevronDown,
	BsList,
	BsFillSunFill,
	BsFillMoonFill
} from 'react-icons/bs';

const NavbarWithHeader = ({
	onOpen = () => {},
	userName = '',
	handleLogOut = () => {}
}) => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 4 }}
			height="20"
			alignItems="center"
			bg={useColorModeValue('white', 'gray.900')}
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
			justifyContent={{ base: 'space-between', md: 'flex-end' }}
			position="sticky"
			top="0"
			shadow="md"
		>
			<IconButton
				display={{ base: 'flex', md: 'none' }}
				onClick={onOpen}
				variant="outline"
				aria-label="open menu"
				shadow="md"
				icon={<BsList />}
			/>

			<Text
				display={{ base: 'flex', md: 'none' }}
				fontSize="2xl"
				fontFamily="monospace"
				fontWeight="bold"
			>
				Logo
			</Text>

			<HStack spacing={{ base: '0', md: '6' }}>
				<HStack spacing={4} alignItems="center">
					<IconButton
						size="lg"
						variant="ghost"
						aria-label="open menu"
						icon={<BsFillBagFill />}
					/>
					<IconButton
						size="lg"
						variant="ghost"
						aria-label="open menu"
						icon={<BsBell />}
					/>
					<Menu>
						<MenuButton
							py={2}
							transition="all 0.3s"
							_focus={{ boxShadow: 'none' }}
						>
							<HStack>
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
			</HStack>
		</Flex>
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

export default NavbarWithHeader;
