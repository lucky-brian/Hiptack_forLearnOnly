import pd1 from './images/Products/1.jpg'
import pd2 from './images/Products/2.jpg'
import pd3 from './images/Products/3.jpg'
import pd4 from './images/Products/4.jpg'
import pd5 from './images/Products/5.jpg'
import pd6 from './images/Products/6.jpg'
import pd7 from './images/Products/7.jpg'
import pd8 from './images/Products/8.jpg'
import pd9 from './images/Products/9.jpg'
import pd10 from './images/Products/10.jpg'
import pd11 from './images/Products/11.jpg'
import pd14 from './images/Products/14.jpg'
import pd15 from './images/Products/15.jpg'
import pd16 from './images/Products/16.jpg'
import pd17 from './images/Products/17.jpg'
import pd18 from './images/Products/18.jpg'
import pd20 from './images/Products/20.jpg'

//size detail an
import size from './images/Products/size.jpg'

// Product detail 1
import productDetail1 from './images/Products/dt1/dt1.jpg'
import productDetail11 from './images/Products/dt1/dt1-1.jpg'

// Product deatail 2
import productDetail2 from './images/Products/dt2/dt2.jpg'
import productDetail22 from './images/Products/dt2/dt2-1.jpg'

// Product deatail 3
import productDetail3 from './images/Products/dt3/dt3-1.jpg'
import productDetail33 from './images/Products/dt3/dt3-2.jpg'
import productDetail333 from './images/Products/dt3/dt3-3.jpg'

// Product deatail 4
import productDetail4 from './images/Products/dt4/dt2-2.jpg'
import productDetail44 from './images/Products/dt4/dt2-3.jpg'
import productDetail444 from './images/Products/dt4/dt2-4.jpg'


interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    stock: number;
    imageDetail: string[];
    collection: string;
}

interface Carts {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    stock: number;
    imageDetail: string[];
    size: string;
    quantity: number;
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Product 1',
        image: pd1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 390,
        stock: 234,
        imageDetail: [productDetail1, productDetail11, size],
        collection: 'black'
    },
    {
        id: 2,
        name: 'Product 2',
        image: pd2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 390,
        stock: 214,
        imageDetail: [productDetail2, productDetail22, size],
        collection: 'white'
    },
    {
        id: 3,
        name: 'Product 3',
        image: pd3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 390,
        stock: 234,
        imageDetail: [productDetail3, productDetail33, productDetail333, size],
        collection: 'gray'
    },
    {
        id: 4,
        name: 'Product 4',
        image: pd4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 390,
        stock: 134,
        imageDetail: [productDetail4, productDetail44, productDetail444, size],
        collection: 'white'
    },
    {
        id: 5,
        name: 'Product 5',
        image: pd5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 390,
        stock: 234,
        imageDetail: [productDetail1, productDetail11, size],
        collection: 'white'
    },
    {
        id: 6,
        name: 'Product 6',
        image: pd6,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 390,
        stock: 24,
        imageDetail: [productDetail2, productDetail22, size],
        collection: 'gray'
    },
    {
        id: 7,
        name: 'Product 7',
        image: pd7,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 390,
        stock: 234,
        imageDetail: [productDetail3, productDetail33, productDetail333, size],
        collection: 'black'
    },
    {
        id: 8,
        name: 'Product 8',
        image: pd8,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 390,
        stock: 234,
        imageDetail: [productDetail4, productDetail44, productDetail444, size],
        collection: 'black'
    },
    {
        id: 9,
        name: 'Product 9',
        image: pd9,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 390,
        stock: 232,
        imageDetail: [productDetail1, productDetail11, size],
        collection: 'gray'
    },
    {
        id: 10,
        name: 'Product 10',
        image: pd10,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 390,
        stock: 124,
        imageDetail: [productDetail2, productDetail22, size],
        collection: 'black'
    },
    {
        id: 11,
        name: 'Product 11',
        image: pd11,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 390,
        stock: 124,
        imageDetail: [productDetail2, productDetail22, size],
        collection: 'white'
    },
    {
        id: 14,
        name: 'Product 14',
        image: pd14,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 390,
        stock: 124,
        imageDetail: [productDetail2, productDetail22, size],
        collection: 'black'
    },
    {
        id: 15,
        name: 'Product 15',
        image: pd15,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 390,
        stock: 124,
        imageDetail: [productDetail2, productDetail22, size],
        collection: 'black'
    },
    {
        id: 16,
        name: 'Product 16',
        image: pd16,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 390,
        stock: 124,
        imageDetail: [productDetail2, productDetail22, size],
        collection: 'black'
    },
    {
        id: 17,
        name: 'Product 17',
        image: pd17,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 390,
        stock: 124,
        imageDetail: [productDetail2, productDetail22, size],
        collection: 'white'
    },
    {
        id: 18,
        name: 'Product 18',
        image: pd18,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 390,
        stock: 124,
        imageDetail: [productDetail2, productDetail22, size],
        collection: 'white'
    },
    {
        id: 19,
        name: 'Product 19',
        image: pd20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 390,
        stock: 124,
        imageDetail: [productDetail2, productDetail22, size],
        collection: 'black'
    },
];


export type { Product, Carts };