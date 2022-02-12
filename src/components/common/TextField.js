import { useState } from 'react';
import {
	Input,
	InputGroup,
	FormHelperText,
	FormLabel,
	FormControl,
	InputRightElement,
	InputLeftElement,
	Button,
	InputRightAddon
} from '@chakra-ui/react';
import { Field, getIn } from 'formik';
import { FaEye } from 'react-icons/fa';
export default function TextField({
	placeholder,
	size = 'md',
	addClass,
	type = 'text',
	name,
	helperText,
	label,
	id,
	leftChildren = null,
	rightChildren = null,
	disabled = false,
	_focus = {
		borderColor: 'green.400',
		borderWidth: 'medium',
		boxShadow: 'none'
	}
}) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<Field name={name}>
			{({ field, form }) => (
				<FormControl
					id={id}
					boxShadow="none"
					isInvalid={getIn(form.errors, name) && getIn(form.touched, name)}
				>
					{label && (
						<FormLabel opacity={0.4}>
							{label}
							<sup>*</sup>
						</FormLabel>
					)}
					<InputGroup size={size}>
						{leftChildren && (
							<InputLeftElement>{leftChildren}</InputLeftElement>
						)}

						<Input
							id={id}
							name={name}
							placeholder={placeholder}
							size={size}
							className={addClass}
							type={
								type === 'password'
									? showPassword
										? 'text'
										: 'password'
									: type
							}
							disabled={disabled}
							_focus={_focus}
							{...field}
						/>

						{type === 'password' && (
							<InputRightAddon p="0">
								<Button
									bg={showPassword ? 'green.400' : 'blue.400'}
									borderRadius="md"
									colorScheme="blue"
									variant="solid"
									size="sm"
									minH="full"
									borderTopLeftRadius="none"
									borderBottomLeftRadius="none"
									onClick={() => setShowPassword(!showPassword)}
								>
									<FaEye />
								</Button>
							</InputRightAddon>
						)}

						{rightChildren && (
							<InputRightAddon>{rightChildren}</InputRightAddon>
						)}
					</InputGroup>
					<FormHelperText>
						{getIn(form.errors, name) && getIn(form.touched, name)
							? form.errors[name]
							: helperText}
					</FormHelperText>
				</FormControl>
			)}
		</Field>
	);
}
