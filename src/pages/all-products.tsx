import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
    const navigate = useNavigate();
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
            {/* Products */}
            <section className="mx-auto py-16">
                <h2 className="text-4xl font-bold text-center mb-8">All Products</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64"
                >
                    {products.map((product:any) => (
                        <div 
                            key={product.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden w-full mx-auto cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                            onClick={() => navigate(`/product-details/${product.id}`)}

                        >
                            <img 
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-cover object-center"
                            />
                            <div className="p-4">
                                <h2 className="font-bold text-xl mb-2">{product.name}</h2>
                                <p className="text-gray-600">${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default AllProducts;