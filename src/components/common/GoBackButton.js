import { Button, useColorModeValue } from '@chakra-ui/react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import history from '@utils/history';

const GoBackButton = ({
	disabled = false,
	Icon = BsFillArrowLeftCircleFill,
	iconSize = 20,
	route = null,
	callBack = () => {},
	isAbsolute = true,
	padding = 4,
	...props
}) => {
	return (
		<Button
			border="2px"
			borderColor={useColorModeValue('green.800', 'green.200')}
			onClick={() => {
				callBack();
				if (route) history.push(route);
				else history.goBack();
			}}
			bottom={0}
			left={0}
			mb={{
				base: isAbsolute ? '5' : '0',
				md: isAbsolute ? '5' : '0'
			}}
			ml={{
				base: isAbsolute ? '4' : '0',
				md: isAbsolute ? '10' : '0'
			}}
			position={isAbsolute ? 'absolute' : 'block'}
			padding={padding}
			disabled={disabled}
			{...props}
		>
			<Icon size={iconSize} />
		</Button>
	);
};

export default GoBackButton;
