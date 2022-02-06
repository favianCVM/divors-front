import React from 'react';
import {
	Tooltip,
	IconButton,
	Divider,
	Avatar,
	Heading,
	Switch,
	useColorMode,
	Box,
	Flex,
	useBoolean
} from '@chakra-ui/react';
import LayoutItem from './LayoutItem';
import LayoutFooter from './LayoutFooter';

//ROUTING
import history from '@utils/history';

const redirect = (to) => {
	history.push(to);
};

const Layout = (props) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';

	const [showLogOut, setShowLogOut] = useBoolean(false);
	const [showSidebar, setShowSidebar] = useBoolean(false);

	//props
	const { children, isLogged } = props;

	// React.useEffect(() => {
	//   if (location.pathname !== "/" && isLogged) setShowSidebar.on();
	// }, []);

	// history.listen((location, action) => {
	//   if (location.pathname !== "/" && isLogged) setShowSidebar.on();
	//   else setShowSidebar.off();
	// });

	return (
		<div className="block md:flex min-h-screen">
			{/* EMPIEZA LA SIDEBAR */}

			{showSidebar && (
				<Flex
					zIndex={1000}
					bg={{
						base: isDark ? 'gray.700' : 'gray.200'
					}}
					py={{
						base: 2,
						md: 6
					}}
					justifyContent={{
						base: 'space-around',
						md: 'space-between'
					}}
					position={{
						base: 'fixed',
						md: 'sticky'
					}}
					top={{
						base: 'initial',
						md: '0px'
					}}
					flexDirection={{
						base: 'row',
						md: 'column'
					}}
					bottom={{
						base: 0
					}}
					w={{
						base: '100%',
						md: '25%'
					}}
				>
					<Flex
						direction={{
							base: 'initial',
							md: 'column'
						}}
						alignItems={{
							base: 'center',
							md: 'initial'
						}}
						justifyContent="space-around"
						w={{
							base: '70%',
							md: 'initial'
						}}
					>
						<Box
							display={{
								base: 'none',
								md: 'flex'
							}}
							alignItems="center"
							flexDirection="column"
						>
							<Avatar src={profile_picture} size="lg" />
							<Heading
								fontSize={{
									base: '2xl',
									lg: '4xl'
								}}
								my="2"
								textAlign="center"
							>
								//
							</Heading>
							<LayoutFooter
								isDark={isDark}
								setShowLogOut={setShowLogOut}
								toggleColorMode={toggleColorMode}
							/>
						</Box>

						<Divider
							display={{
								base: 'none',
								md: 'block'
							}}
							my={{
								base: 0,
								md: 4
							}}
						/>

						<Flex
							w={{
								base: '100%',
								md: 'initial'
							}}
							direction={{
								base: 'row',
								md: 'column'
							}}
							justifyContent={{
								base: 'space-around',
								md: 'initial'
							}}
							alignItems={{
								base: 'center',
								md: 'initial'
							}}
						>
							{/* routes */}
							{routes[props.role]
								?.filter((route) => route.title && route.icon)
								.map((route) => (
									<LayoutItem key={route.to} {...route} clickLink={redirect} />
								))}
						</Flex>
					</Flex>

					{/* footer */}
					<LayoutFooter
						isDark={isDark}
						setShowLogOut={setShowLogOut}
						toggleColorMode={toggleColorMode}
						isMobile={true}
					/>
				</Flex>
			)}

			{/* TERMINA LA SIDEBAR  */}

			<div className="flex flex-col w-full">{children}</div>
		</div>
	);
};

export default Layout;
