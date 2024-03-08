import { useState } from 'react';
import HeroBg from '../asstes/hero-bg.webp'

const Home = () => {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Product 1',
            price: 19.99,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            name: 'Product 2',
            price: 29.99,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            name: 'Product 3',
            price: 39.99,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 4,
            name: 'Product 4',
            price: 49.99,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 5,
            name: 'Product 5',
            price: 59.99,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 6,
            name: 'Product 6',
            price: 69.99,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 7,
            name: 'Product 7',
            price: 79.99,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 8,
            name: 'Product 8',
            price: 89.99,
            image: 'https://via.placeholder.com/150'
        },
    ]);

    return (
        <>
            {/* Hero Section */}
            <section 
                style={
                    {
                        backgroundImage: `url(${HeroBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }
                }
                className="flex flex-col items-center justify-center h-screen">
                    <div
                        className="flex flex-col items-center justify-center space-y-4 bg-black bg-opacity-50 p-8 rounded-lg w-full h-full"
                    >

                        <h1 
                            className="text-5xl font-bold text-white text-center p-4 lg:text-6xl xl:text-7xl"
                        >
                            Welcome to StrengthForge
                        </h1>
                        <p className="text-white">
                            Your one stop shop for all things fitness
                        </p>
                    </div>
            </section>

            {/* Why us*/}
            <section>
                <h2 className="text-4xl font-bold text-center p-4">
                    Why Choose StrengthForge?
                </h2>
                <div className="flex items-center justify-center p-8 flex-wrap lg:w-3/5 m-auto"
                >
                    <div
                        className='flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-lg w-[300px] h-[300px] m-6'
                    >
                        <h3 
                            className="text-2xl font-bold p-4 text-center text-blue-500" 
                        >
                            Quality Products
                        </h3>
                        <p className="text-xl text-center p-4"
                        >
                            We only carry the best products that are built to last
                        </p>
                    </div>

                    <div
                        className='flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-lg w-[300px] h-[300px] m-6'
                        >
                        <h3 
                            className="text-2xl font-bold p-4 text-center text-blue-500" 
                        >
                            Fast Shipping
                        </h3>
                        <p className="text-xl text-center p-4"
                        >
                            We offer fast shipping on all orders
                        </p>
                    </div>

                    <div
                        className='flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-lg w-[300px] h-[300px] m-6'
                        >
                        <h3 
                            className="text-2xl font-bold p-4 text-center text-blue-500" 
                        >
                            Great Customer Service
                        </h3>
                        <p className="text-xl text-center p-4"
                        >
                            Our team is here to help you with any questions or concerns
                        </p>
                    </div>
                </div>
            </section>

            {/* Best selling products*/}
            <section className="flex flex-col items-center justify-center p-8">
                <h2 className="text-4xl font-bold text-center p-4">
                    Best Selling Products
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <div 
                            key={product.id}
                            className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl hover:scale-105 transform hover:bg-gray-200 m-6 min-w-1/4 max-w-1/4 h-9/1 cursor-pointer"
                        >
                            <img 
                                src={product.image}
                                alt={product.name}
                                className="w-48 h-48 object-cover rounded-lg"
                            />
                            <div
                                className="flex flex-col items-center justify-center p-4"
                            >
                                <h3 className="text-xl font-bold">
                                    {product.name}
                                </h3>
                                <p className="text-lg font-bold">
                                    ${product.price}
                                </p>
                            </div>

                            <button 
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                            >
                                Add to Cart
                            </button>

                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;