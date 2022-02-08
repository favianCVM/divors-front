import { ReactElement } from 'react';
import {
	Box,
	SimpleGrid,
	Icon,
	Text,
	Stack,
	Flex,
	useColorModeValue
} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

const Feature = ({ title, text, icon }) => {
	return (
		<Stack
			p={6}
			rounded="md"
			shadow="lg"
			className="ease-linear duration-75 delay-75"
			_hover={{
				bg: 'green.200',
				shadow: '2xl'
			}}
		>
			<Flex
				w={16}
				h={16}
				align={'center'}
				justify={'center'}
				color={'white'}
				rounded={'full'}
				bg={'gray.100'}
				mb={1}
			>
				{icon}
			</Flex>
			<Text fontWeight={600}>{title}</Text>
			<Text color={'gray.600'}>{text}</Text>
		</Stack>
	);
};

export default function SimpleThreeColumns() {
	return (
		<Box
			p={{
				md: 10
			}}
		>
			<SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
				<Feature
					icon={<Icon as={FcAssistant} w={10} h={10} />}
					title={'Lifetime Support'}
					text={
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
					}
				/>
				<Feature
					icon={<Icon as={FcDonate} w={10} h={10} />}
					title={'Unlimited Donations'}
					text={
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
					}
				/>
				<Feature
					icon={<Icon as={FcInTransit} w={10} h={10} />}
					title={'Instant Delivery'}
					text={
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
					}
				/>
			</SimpleGrid>
		</Box>
	);
}
