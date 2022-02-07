import { LOG_OUT, SIGN_IN } from '../actionTypes';
import requests from '@utils/requests';
import formatFormData from '@utils/formatFormData';

export function logIn(data) {
	return async (dispatch) => {
		return requests
			.logIn(formatFormData(data))
			.then(async (r) => {
				await dispatch({
					type: SIGN_IN,
					payload: {
						...r.data
					}
				});
				return {
					title: 'Bienvenido',
					success: true,
					status: 'success'
				};
			})
			.catch((e) => {
				return {
					title: e.response?.data?.message || 'Hubo un problema en el login.',
					success: false,
					status: 'error',
					description: 'Intente de nuevo'
				};
			});
	};
}

export function logOut() {
	return async (dispatch) => {
		return requests
			.logOut()
			.then(async (r) => {
				await dispatch({
					type: LOG_OUT,
					payload: {
						...r.data
					}
				});

				return {
					title: 'Adios',
					success: true,
					status: 'success'
				};
			})
			.catch((e) => {
				return {
					title: e.response?.data?.message || 'Hubo un problema en el logout.',
					success: false,
					status: 'error',
					description: 'Intente de nuevo'
				};
			});
	};
}

export function checkSessionState() {
	return async (dispatch) => {
		return requests
			.checkSessionState()
			.then(async (r) => {
				return {
					success: true
				};
			})
			.catch((e) => {
				return {
					title: e.response?.data?.message || 'Session caducada.',
					success: false,
					status: 'error'
				};
			});
	};
}
