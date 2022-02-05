import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Heading,
	Text,
	useColorModeValue
} from '@chakra-ui/react';
import { TextField, SubmitFormButton } from '@components/common';
import { Formik, Form } from 'formik';
import { loginValidations } from '@utils/validations';

export default function LoginForm({ handleSubmit }) {
	return (
		<Flex
			minH={'100vh'}
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('gray.50', 'gray.800')}
		>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'}>Sign in to your account</Heading>
					<Text fontSize={'lg'} color={'gray.600'}>
						to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
					</Text>
				</Stack>
				<Box
					rounded={'lg'}
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow={'xl'}
					p={8}
				>
					<Formik
						initialValues={{
							email: '',
							password: ''
						}}
						onSubmit={handleSubmit}
						validate={loginValidations}
					>
						{(props) => (
							<Form>
								<Stack alignItems="center" spacing={5}>
									<TextField
										placeholder="correo electrónico"
										size="md"
										id="email"
										name="email"
										type="email"
										helperText="Introduzca su correo electrónico"
										disabled={props.isSubmitting}
									/>

									<TextField
										placeholder="contraseña"
										size="md"
										id="password"
										name="password"
										type="password"
										helperText="Introduzca su contraseña"
										disabled={props.isSubmitting}
									/>

									<SubmitFormButton
										isLoggin={true}
										errors={props.errors}
										isSubmitting={props.isSubmitting}
										title="Iniciar sesión"
									/>
								</Stack>
							</Form>
						)}
					</Formik>
				</Box>
			</Stack>
		</Flex>
	);
}
