import React from 'react';
import {
	Box,
	Center,
	Heading,
	Text,
	Button,
	Link,
	AbsoluteCenter,
	Icon,
	SimpleGrid,
	Flex,
	Image,
	Stack
} from '@chakra-ui/react';
import history from '@utils/history';

const HomePage = ({}) => {
	const [posts, setPosts] = React.useState([]);
	const [loading, setLoading] = React.useState(false)
	
	const getPostsFromAPI = React.useCallback(async () => {
		setLoading(true);
		try {
			const resp = fetch('https://jsonplaceholder.typicode.com/todos/1');
			await resp.json;
			setPosts(resp);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	}, []);

	React.useEffect(() => {
		getPostsFromAPI();
	}, [getPostsFromAPI]);

	return (
		<Box pt="16">
			test1
			<Button onClick={() => history.push('/2')}>ir</Button>
		</Box>
	);
};

export default HomePage
