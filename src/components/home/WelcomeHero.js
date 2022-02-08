import {
	Box,
	Heading,
	Container,
	Text,
	Button,
	Stack,
	Icon,
	useColorModeValue,
	createIcon,
	Link
} from '@chakra-ui/react';

export default function WelcomeHeader() {
	return (
		<Container maxW={'3xl'}>
			<Stack
				as={Box}
				textAlign={'center'}
				spacing={{ base: 8, md: 14 }}
				py={{ base: 20, md: 36 }}
			>
				<Heading
					fontWeight={600}
					fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
					lineHeight={'110%'}
				>
					🛍️ Divors 🛍️
					<br />
					<Text as={'span'} color={'green.400'}>
						lorem ipsum
					</Text>
				</Heading>
				<Text color={'gray.500'}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</Text>
				<Stack
					direction={'column'}
					spacing={3}
					align={'center'}
					alignSelf={'center'}
					position={'relative'}
				>
					<Button
						textColor={useColorModeValue('gray.700', 'white')}
						colorScheme={'green'}
						bg={'green.400'}
						rounded={'full'}
						p={6}
						_hover={{
							bg: 'green.500'
						}}
						as="a"
						href="/login"
					>
						Entrar ahora
					</Button>
				</Stack>
			</Stack>
		</Container>
	);
}
