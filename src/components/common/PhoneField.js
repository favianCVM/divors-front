import React from 'react';
import {
	InputGroup,
	FormControl,
	useColorMode,
	FormHelperText
} from '@chakra-ui/react';
import { Field, getIn } from 'formik';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function PhoneField({
	name = ' ',
	id = '',
	size = 'md',
	placeholder = '',
	disabled = false,
	helperText = ''
}) {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Field name={name}>
			{({ field, form }) => (
				<FormControl
					id={id}
					isDisabled={disabled}
					isInvalid={getIn(form.errors, name) && getIn(form.touched, name)}
				>
					<InputGroup size={size}>
						<PhoneInput
							disabled={disabled}
							//
							country={'ve'}
							value={field.value}
							onChange={(phone) => form.setFieldValue(name, phone)}
							containerClass={
								getIn(form.errors, name) && getIn(form.touched, name)
									? colorMode === 'light'
										? 'react-tel-input-error'
										: 'dark-react-tel-input-error'
									: colorMode === 'light'
									? 'react-tel-input'
									: 'dark-react-tel-input'
							}
						/>
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
