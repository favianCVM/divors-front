import Api from './api';

// user auth
const login = (data) => Api().post('/auth/login', data);

export default {
	// user auth
	login
};
