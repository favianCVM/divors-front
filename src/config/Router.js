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
import routes from '@utils/routes';
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

const AppRouter = ({ isLogged }) => {
	return (
		<React.Suspense fallback={<SuspenseLoading />}>
			<Router history={history}>
				<Layout>
					<Switch>
						<Route exact path="/" component={HomePage} />

						{isLogged ? (
							<Switch>
								<Redirect from="/iniciar-sesion" to="/" />
								<Redirect from="/login" to="/" />
							</Switch>
						) : (
							<Switch>
								<Redirect from="/login" to="/iniciar-sesion" />
								<Route path="/iniciar-sesion" component={LoginPage} />
							</Switch>
						)}

						<Route component={Error404} />
					</Switch>
				</Layout>
			</Router>
		</React.Suspense>
	);
};

const mapStateToProps = (state) => ({
	isLogged: state.auth.get('logged') && state.auth.get('token')
});

export default connect(mapStateToProps, null)(AppRouter);
