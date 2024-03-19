import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../services/black/products-services";


const AllProducts = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<any>();
    
    const getAllProducts = async () => {
        const products = await getProducts();
        setProducts(products);
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <>

            {
                !products ? (
                    <div
                        className="flex items-center justify-center h-screen"
                    >
                        <p
                            className="text-2xl font-bold"
                        >
                            Loading...
                        </p>
                    </div>
                ) : (

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

                )
            }
        </>
    );
};

export default AllProducts;