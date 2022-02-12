import { Box, Center } from '@chakra-ui/react';
import Fuse from 'fuse.js';
import 'react-select-search/style.css';
import SelectSearch, { fuzzySearch } from 'react-select-search';

const SearchBar = ({
	options = [
		{
			name: 'People group 1',
			type: 'group',
			items: [
				{
					name: 'Annie Cruz',
					value: 'annie.cruz',
					photo: 'https://randomuser.me/api/portraits/women/60.jpg'
				},
				{
					name: 'Eli Shelton',
					disabled: true,
					value: 'eli.shelton',
					photo: 'https://randomuser.me/api/portraits/men/7.jpg'
				}
			]
		},
		{
			name: 'People Group 2',
			type: 'group',
			items: [
				{
					name: 'Loretta Rogers',
					value: 'loretta.rogers',
					photo: 'https://randomuser.me/api/portraits/women/51.jpg'
				},
				{
					name: 'Lloyd Fisher',
					value: 'lloyd.fisher',
					photo: 'https://randomuser.me/api/portraits/men/34.jpg'
				},
				{
					name: 'Tiffany Gonzales',
					value: 'tiffany.gonzales',
					photo: 'https://randomuser.me/api/portraits/women/71.jpg'
				}
			]
		}
	]
}) => {
	return (
		<Center
			w={{
				base: '80%',
				md: '25%',
				lg: '30%',
				xl: '25%'
			}}
			shadow="sm"
			justifySelf="center"
			className="search-bar__container"
		>
			{/* {(() => {
				setTimeout(() =>{
					debugger;
				}, 5000)
			})()} */}
			<SelectSearch
				options={options}
				emptyMessage="No encontrado"
				placeholder="Buscar producto"
				search
				filterOptions={fuzzySearch}

				//async fectch
				// getOptions={(query) => {
				// 	return new Promise((resolve, reject) => {
				// 		fetch(
				// 			`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
				// 		)
				// 			.then((response) => response.json())
				// 			.then(({ drinks }) => {
				// 				resolve(
				// 					drinks.map(({ idDrink, strDrink }) => ({
				// 						value: idDrink,
				// 						name: strDrink
				// 					}))
				// 				);
				// 			})
				// 			.catch(reject);
				// 	});
				// }}
			/>
		</Center>
	);
};

export default SearchBar;
