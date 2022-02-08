import { Button } from '@chakra-ui/react';
import '../../styles/tridimentionalButton.scss';

const TridimentionalButton = ({
	onClick = () => {},
	children,
	addClasses,
	disabled = false,
	py = '5',
	textTransform = '',
	type = 'submit',
	isLoading = false,
	...props
}) => {
	return (
		<Button
			isLoading={isLoading}
			type={type}
			disabled={disabled}
			className={`tridimentional_button ${addClasses}`}
			py={py}
			onClick={onClick}
			{...props}
		>
			{children}
		</Button>
	);
};

export default TridimentionalButton;
