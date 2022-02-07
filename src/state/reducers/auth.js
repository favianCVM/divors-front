import { Map as map } from 'immutable';
import { LOG_OUT, SIGN_IN } from '../actionTypes';

const initialState = map({
	token: localStorage.getItem('token'),
	fname: localStorage.getItem('fname'),
	lname: localStorage.getItem('lname'),
	userName: localStorage.getItem('userName'),
	userType: localStorage.getItem('userType'),
	logged: localStorage.getItem('logged')
});

const user = (state = initialState, action) => {
	switch (action.type) {
		case LOG_OUT:
			localStorage.removeItem('token');
			localStorage.removeItem('logged');
			localStorage.removeItem('fname');
			localStorage.removeItem('lname');
			localStorage.removeItem('userName');
			localStorage.removeItem('userType');
			return state
				.set('logged', false)
				.set('token', null)
				.set('userType', null)
				.set('fname', null)
				.set('lname', null)
				.set('userName', null);

		case SIGN_IN:
			let data = {
				token: action?.payload?.user?.token,
				...action?.payload?.user?._doc
			};

			localStorage.setItem('token', data.token);
			localStorage.setItem('fname', data.fname);
			localStorage.setItem('lname', data.lname);
			localStorage.setItem('userName', `${data.fname} ${data.lname}`);
			localStorage.setItem('userType', data.userType);
			localStorage.setItem('logged', true);

			return state
				.set('logged', true)
				.set('userType', data.userType)
				.set('fname', data.fname)
				.set('lname', data.lname)
				.set('userName', `${data.fname} ${data.lname}`)
				.set('token', data.token);

		default:
			return state;
	}
};

export default user;
