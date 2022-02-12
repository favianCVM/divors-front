import { BsFillGridFill, BsListTask } from 'react-icons/bs';

const product = {
	to: '/product',
	as: '/productos',
	icon: BsFillGridFill,
	name: 'Productos',
	component: null
};

const orders = {
	to: '/product',
	as: '/productos',
	icon: BsListTask,
	name: 'Ordenes',
	component: null
};
const inventry = {
	to: '/inventario',
	as: '/inventario',
	icon: BsListTask,
	name: 'inventario',
	component: null
};

export default {
	superAdmin: [],
	admin: [product, orders, inventry],
	common: []
};
