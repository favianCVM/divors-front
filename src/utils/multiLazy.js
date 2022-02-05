import { lazy } from 'react';

export default (moduleLoaderArray) => {
	const promises = Promise.all(moduleLoaderArray.map((loader) => loader()));
	return moduleLoaderArray.map((m, index) =>
		lazy(() => promises.then((results) => results[index]))
	);
};
