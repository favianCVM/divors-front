import Api from './api';

// user auth
const logIn = (data) => Api().post('/auth/login', data);
const logOut = (data) => Api().get('/auth/logout', data);
const checkSessionState = () => Api().get('/auth/session-state');

export default {
	// user auth
	logIn,
	logOut,
	checkSessionState,
};
