import {
	Flex,
	Box,
	Stack,
	Heading,
	Text,
	useColorModeValue
} from '@chakra-ui/react';
import { TextField, TextareaField, SubmitFormButton } from '@components/common';
import { Formik, Form } from 'formik';
import signUpUser from '@models/signUpUser';
import PhoneField from '@components/common/PhoneField';
import validations from '@utils/validations';

export default function signUpForm({ handleSubmit }) {
	return (
		<Flex
			minH={'100vh'}
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('gray.50', 'gray.800')}
		>
			<Stack
				w={{
					base: '100%',
					md: '30%'
				}}
				spacing={8}
				mx={'auto'}
				py={12}
				px={6}
			>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'} textAlign={'center'}>
						Registrarme 💈
					</Heading>
				</Stack>
				<Box
					rounded={'lg'}
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow="2xl"
					py={8}
					px={5}
				>
					<Formik
						onSubmit={handleSubmit}
						validationSchema={validations.signUpValidations}
						initialValues={signUpUser}
					>
						{(props) => (
							<Form>
								<Stack spacing={6}>
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

									<TextField
										placeholder="cedula"
										size="md"
										id="uniqueId"
										name="uniqueId"
										helperText="Introduzca su cedula"
										disabled={props.isSubmitting}
									/>

									<TextField
										placeholder="nombre"
										size="md"
										id="fname"
										name="fname"
										helperText="Introduzca su nombre"
										disabled={props.isSubmitting}
									/>

									<TextField
										placeholder="apellido"
										size="md"
										id="lname"
										name="lname"
										helperText="Introduzca su apellido"
										disabled={props.isSubmitting}
									/>

									<TextareaField
										name="address"
										id="address"
										disabled={props.isSubmitting}
										placeholder="direccion"
									/>

									<PhoneField
										name="phoneNumber"
										disabled={props.isSubmitting}
										helperText="Introduzca su numero de telefono"
									/>
								</Stack>

								<SubmitFormButton
									errors={props.errors}
									hiddeIcon={true}
									isSubmitting={props.isSubmitting}
									isSignUp={true}
									title="Regristrarme"
								/>
							</Form>
						)}
					</Formik>
				</Box>
			</Stack>
		</Flex>
	);
}
