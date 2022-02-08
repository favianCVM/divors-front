import React from 'react';
import { Stack, Link, Center, Text, useToast, Spinner } from '@chakra-ui/react';
import { BiCheck } from 'react-icons/bi';
import { TridimentionalButton } from '@components/common';

const SubmitFormButton = ({
	title = '',
	errors = {},
	isSubmitting = false,
	isSignUp = false,
	containerProps = {
		textAlign: 'center',
		width: 'full',
		my: 6,
		spacing: 6
	},
	isLoggin = false,
	Icon = BiCheck
}) => {
	const toast = useToast();
	const toastId = 'toast-id';

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
			<Link href="/" color={'blue.400'}>
				Volver
			</Link>
		</Stack>
	);

	const signUpExtraInputs = () => (
		<Center mt="6">
			<Text>
				Ya posee una cuenta? &nbsp;
				<Link href="/login" color="blue.400">
					iniciar sesion
				</Link>
			</Text>
		</Center>
	);

	return (
		<Stack {...containerProps}>
			{isSubmitting ? (
				<Center w="full" py="1">
					<Spinner />
				</Center>
			) : (
				<TridimentionalButton
					onClick={() => {
						if (!toast.isActive(toastId) && Object.keys(errors).length > 0)
							toast({
								title: 'Por favor correguir los errores',
								status: 'error',
								isClosable: true,
								duration: 1500,
								id: toastId
							});
					}}
					disabled={isSubmitting}
					isLoading={isSubmitting}
				>
					{title}
				</TridimentionalButton>
			)}

			{isLoggin && logginExtraInputs()}
			{isSignUp && signUpExtraInputs()}
		</Stack>
	);
};

export default SubmitFormButton;
