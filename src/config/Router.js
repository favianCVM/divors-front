import React from 'react';
import {
	Switch,
	Route,
	Redirect,
	Router,
	BrowserRouter
} from 'react-router-dom';
import Layout from '@components/layout/Layout';
import { connect } from 'react-redux';
import history from '@utils/history';
import SuspenseLoading from '@components/common/SuspenseLoading';
import multiLazy from '@utils/multiLazy';

// initial pages
const [HomePage, Error404] = multiLazy([
	() => import('../pages/index'),
	() => import('../containers/404')
]);

// admin pages

// common user pages

const [LoginPage] = multiLazy([() => import('../pages/auth/Login.js')]);

const AppRouter = ({ isLogged = false }) => {
	const loginRoutes = [
		<Route path="/iniciar-sesion" component={LoginPage} />,
		<Route exact path="/login">
			<Redirect to="/iniciar-sesion" />
		</Route>
	];

	const loggedRedirects = [
		<Redirect from="/iniciar-sesion" to="/" />,
		<Redirect from="/login" to="/" />
	];

	return (
		<Router history={history}>
			<Layout>
				<React.Suspense fallback={<SuspenseLoading />}>
					<Route exact path="/" component={HomePage} />

					{!isLogged ? loginRoutes : loggedRedirects}

					{/* <Route path="*" component={Error404} /> */}
				</React.Suspense>
			</Layout>
		</Router>
	);
};

const mapStateToProps = (state) => ({
	isLogged: state.auth.get('logged') && state.auth.get('token')
});

export default connect(mapStateToProps, null)(AppRouter);
