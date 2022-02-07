import {
	Button,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverArrow,
	PopoverCloseButton,
	ListItem,
	UnorderedList,
	Box,
	Stack,
	Checkbox,
	Link,
	useColorModeValue
} from '@chakra-ui/react';
import { BiSave, BiCheck } from 'react-icons/bi';

const SubmitFormButton = ({
	title = '',
	errors = {},
	isSubmitting = false,

	containerProps = {
		textAlign: 'center',
		width: 'full'
	},
	buttonProps = {
		w: 'full',
		bg: useColorModeValue('green.500', 'gree.200')
	},
	isLoggin = false,
	Icon = BiCheck
}) => {
	const logginExtraInputs = () => (
		<Stack
			mt="5"
			direction={{ base: 'column' }}
			align={'center'}
			justify={'space-between'}
			spacing={2}
		>
			{/* <Checkbox>Recuerdame</Checkbox> */}
			<Link href="/renew-password" color={'blue.400'}>
				Olvido su contraseña?
			</Link>
			<Link href="/sign-up" color={'blue.400'}>
				Registrarse
			</Link>
		</Stack>
	);
	return (
		<Box {...containerProps}>
			<Popover>
				<PopoverTrigger>
					<Button
						_hover={{
							shadow: 'lg'
						}}
						mx="auto"
						mt={4}
						px={4}
						colorScheme="blue"
						type="submit"
						isLoading={isSubmitting}
						leftIcon={<Icon />}
						{...buttonProps}
					>
						{title}
					</Button>
				</PopoverTrigger>
				{Object.keys(errors).length > 0 && (
					<PopoverContent>
						<PopoverArrow />
						<PopoverCloseButton />
						<PopoverHeader>Tienes errores</PopoverHeader>
						<PopoverBody className="flex flex-col items-start">
							<UnorderedList>
								{Object.keys(errors).map((err) => {
									if (Array.isArray(errors[err]))
										return errors[err].reduce((acc, item) => {
											let nestedErrors = Object.keys(item).map((el) => (
												<ListItem textAlign="justify" key={item[el]}>
													{item[el]}
												</ListItem>
											));
											acc.push(nestedErrors);
											return acc;
										}, []);
									else if (typeof errors[err] === 'object') {
										return Object.keys(errors[err]).map((el) => (
											<ListItem textAlign="justify" key={errors[err][el]}>
												{errors[err][el]}
											</ListItem>
										));
									} else
										return (
											<ListItem textAlign="justify" key={errors[err]}>
												{errors[err]}
											</ListItem>
										);
								})}
							</UnorderedList>
						</PopoverBody>
					</PopoverContent>
				)}
			</Popover>
			{isLoggin && logginExtraInputs()}
		</Box>
	);
};

export default SubmitFormButton;
