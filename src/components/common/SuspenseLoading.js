import React from 'react';
import { Center } from '@chakra-ui/react';
import HashLoader from 'react-spinners/HashLoader';
import { LoaderStyling } from '@utils/commonStyles';

const SuspenseLoading = () => (
	<Center flexDir="column" className="min-h-screen">
		<Center>
			<HashLoader
				color={LoaderStyling.color}
				loading={true}
				// speedMultiplier={1}
			/>
		</Center>
	</Center>
);

export default SuspenseLoading;
