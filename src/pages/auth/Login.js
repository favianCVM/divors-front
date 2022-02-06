import { GoBackButton } from '@components/common';
import { BsHouseFill } from 'react-icons/bs';
import LoginContainer from '@containers/auth/LoginContainer';

const LoginPage = () => {
	return (
		<>
			<GoBackButton Icon={BsHouseFill} />
			<LoginContainer />
		</>
	);
};

export default LoginPage;
