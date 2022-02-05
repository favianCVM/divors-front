import React from 'react';
import { CompanyHeader } from '@components/common';
import LoginForm from '@components/auth_form/LoginForm';
import API from '@utils/api';
import formatFormData from '@utils/formatFormData';

const HomePage = ({}) => {
	const [logged, setLogged] = React.useState(false);
	
	return (
		<>
			<LoginForm
				handleSubmit={async (values) => {
					console.log(values);
					await API()
						.post('/auth/login', formatFormData(values))
						.then((res) => {
							console.log(res.data);
							setLogged(true);
						})
						.catch((error) => {
							console.error(error);
							setLogged(false);
						});

					return;
				}}
			/>
		</>
	);
};

export default HomePage