import React from 'react';
import {
	Flex,
	Text,
	Icon,
	Link,
	useBoolean,
	useColorModeValue
} from '@chakra-ui/react';
import history from '@utils/history';

const LayoutItem = ({ icon, name, to, as }) => {
	return (
		<Link
			href={to}
			style={{ textDecoration: 'none' }}
			_focus={{ boxShadow: 'none' }}
		>
			<Flex
				align="center"
				p="4"
				mx="4"
				borderRadius="lg"
				role="group"
				cursor="pointer"
				_hover={{
					bg: useColorModeValue('green.500', 'green.400'),
					color: 'white'
				}}
			>
				{icon && (
					<Icon
						mr="4"
						fontSize="16"
						_groupHover={{
							color: 'white'
						}}
						as={icon}
					/>
				)}
				{name}
			</Flex>
		</Link>
	);
};

export default LayoutItem;
