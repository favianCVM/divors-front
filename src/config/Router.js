import React from 'react';
import {
	Switch,
	Route,
	Redirect,
	Router,
	BrowserRouter
} from 'react-router-dom';
import Layout from '@components/common/Layout';
import routes from '@utils/routes';
import history from '@utils/history';
import SuspenseLoading from '@components/common/SuspenseLoading';
import multiLazy from '@utils/multiLazy';

const [Page1, Page2, HomePage] = multiLazy([
	() => import('../pages/Page1'),
	() => import('../pages/Page2'),
	() => import('../pages/index')
]);

const AppRouter = (props) => {
	return (
		<React.Suspense fallback={<SuspenseLoading />}>
			<Router history={history}>
				<Layout>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/1" component={Page1} />
						<Route exact path="/2" component={Page2} />
					</Switch>
				</Layout>
			</Router>
		</React.Suspense>
	);
};
 

export default AppRouter
