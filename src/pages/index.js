import React from 'react';
import WelcomeHeader from '@components/home/WelcomeHero';
import CommonHero from '@components/home/CommonHero';
import ProductCard from '@components/product/ProductCard';

const HomePage = ({}) => {
	return (
		<>
			<WelcomeHeader />
			<CommonHero />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</>
	);
};

export default HomePage;
