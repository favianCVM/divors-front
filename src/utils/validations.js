// YUP
import * as Yup from 'yup';

const phoneRegExp =
	/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

const signUpValidations = Yup.object().shape({
	fname: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	lname: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	password: Yup.string()
		.min(2, 'Too Short!')
		.max(30, 'Too Long!')
		.required('Required'),
	uniqueId: Yup.string()
		.min(2, 'Too Short!')
		.max(30, 'Too Long!')
		.required('Required'),
	email: Yup.string()
		.matches(emailRegExp, 'invalid email')
		.required('Required'),
	phoneNumber: Yup.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.required('requerido'),
	address: Yup.string()
		.min(15, 'Too Short!')
		.max(200, 'Too Long!')
		.required('Required')
});

const loginValidations = Yup.object().shape({
	password: Yup.string()
		.min(2, 'Too Short!')
		.max(30, 'Too Long!')
		.required('Required'),
	email: Yup.string().email('Invalid email').required('Required')
});

export default {
	signUpValidations,
	loginValidations
};
