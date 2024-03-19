import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart, getItemQuantity, reduceQuantity, removeFromCart } from "../services/cart-services";
import { getProductsById, productImageUrl } from "../services/black/products-services";


const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<any>();
    const [quantity, setQuantity] = useState(getItemQuantity(id));

    const getProduct = async () => {
        const product = await getProductsById(id);
        setProduct(product);
    }

    useEffect(() => {
        getProduct();
    }, []);


    const setSalePrice = () => {
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
                !product? (
                    <div
                     className="flex items-center justify-center h-screen"
                     >
                        <svg className="animate-spin h-12 w-12 mr-3" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#10b981" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="#10b981" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.009 8.009 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                ):(

                    <div
                        className="pt-6"
                    >
                        <div
                            className="flex justify-center items-center space-x-4 flex-col md:flex-row md:space-x-8 md:space-y-0 md:space-x-4 my-8 md:my-16 border-gray-200 shadow-lg w-fit m-auto p-9 pb-16 rounded-lg bg-white"
                        >
                            <div
                                className=""
                            >
                                {/* api/files/COLLECTION_ID_OR_NAME/RECORD_ID/FILENAME */}
                                <img
                                    src={productImageUrl() + product.id + '/' + product.image[0]}
                                    alt={product.name}
                                    className="w-64 h-64 object-cover rounded-lg shadow-lg"
                                />
                            </div>

                            <div
                                className=""
                            >
                                <h2
                                    className="text-2xl font-bold text-gray-800 text-center my-6 "
                                >
                                    {product.name}
                                </h2>
                                <p
                                    className="text-gray-600 text-center "
                                >
                                    {product.description}
                                </p>
                                
                                <p
                                    className="text-2xl font-bold text-gray-800 text-center my-6 "
                                >
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
                                                        ${setSalePrice()}
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

                                <div
                                    className="flex justify-center items-center space-x-4"
                                >
                                    {
                                        quantity === 0 ?  (
                                            <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out my-6"
                                            onClick={() => {
                                                setQuantity(quantity + 1);
                                                addToCart(product.id , product.name);
                                            }}
                                            >
                                                Add to Cart
                                            </button>
                                        ):(
                                            <>
                                            
                                                <button
                                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 ease-in-out"
                                                    onClick={() =>{
                                                        setQuantity(0);
                                                        removeFromCart(product.id);
                                                    
                                                    }}
                                                >
                                                    Remove from Cart
                                                </button>
                                                <button
                                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
                                                    onClick={() => {
                                                        setQuantity(quantity - 1);
                                                        reduceQuantity(product.id);
                                                    }}
                                                >
                                                    -
                                                </button>
                                                <span
                                                    className="text-2xl font-bold"
                                                >
                                                    {quantity}
                                                </span>
                                                <button
                                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
                                                    onClick={() => {
                                                        setQuantity(quantity + 1);
                                                        addToCart(product.id);
                                                    }}
                                                >
                                                    +
                                                </button>
                                            </>
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }


        </>
    );
};

export default ProductDetails;
