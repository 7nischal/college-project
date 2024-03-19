import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts, productImageUrl } from "../services/black/products-services";


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


    const setSalePrice = (product:any) => {
        if (product.sale) {
            const discountedPrice = product.price - (product.price * (parseInt(product.sale) / 100));
            return discountedPrice.toFixed(2);
        }
        else {
            return product.price.toFixed(2);
        }
    }

    return (
        <>

            {
                !products ? (
                    <div
                        className="flex items-center justify-center h-screen"
                    >
                        <svg className="animate-spin h-12 w-12 mr-3" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#10b981" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="#10b981" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.009 8.009 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
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
                                        src={productImageUrl() + product.id + '/' + product.image[0]}
                                        alt={product.name}
                                        className="w-full h-64 object-cover object-center"
                                    />
                                    <div className="p-4">
                                        <h2 className="font-bold text-xl mb-2">{product.name}</h2>
                                        
                                        <p className="font-bold text-lg">
                                            {
                                                product.sale !== '' ? (
                                                    <>        
                                                        <div>
                                                        
                                                            <span
                                                                className="line-through text-red-500"
                                                            >
                                                                ${product.price}
                                                            </span>
                                                        </div> 
                                                        <div>
                                                            <span>
                                                                ${setSalePrice(product)}
                                                            </span>
                                                        </div>                       
                                                    </>
                                                ) : (
                                                    <div>
                                                        <span>
                                                            ${product.price}
                                                        </span>
                                                    </div>
                                                )
                                            }
                                        </p>
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