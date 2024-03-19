import { useState } from "react";
import { getCart, updateAllCartItems,removeFromCart,addToCart,reduceQuantity } from "../services/cart-services";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [products, setProducts] = useState(getCart());
    const navigate = useNavigate();

    const deleteProduct = (id:any) => {
        let newProducts = products.filter((product:any) => product.id !== id);
        setProducts(newProducts);
    }

    const updateQuantity = (id:any, quantity:any) => {
        let newProducts = products.map((product:any) => {
            if (product.id === id) {
                product.quantity = quantity;
            }
            return product;
        });
        setProducts(newProducts);
    }

    return (
        <>
            {
                products.length === 0 ? (
                    <div
                        className="flex items-center justify-center h-screen"
                    >
                        <h1
                            className="text-3xl font-bold text-center"
                        >
                            Your cart is empty
                        </h1>
                    </div>
                ):
                (
                    <div
                    className=""
                >
                    <h1
                        className="text-3xl font-bold text-center"
                    >
                        Cart
                    </h1>
                    <div
                        className="flex flex-col items-center bg-white p-4 w-10/12 lg:w-1/2 mx-auto mt-4 rounded-lg"
                    >
                        {products.map((product:any) => (
                            <div
                                key={product.id}
                                className="flex items-center justify-between p-4 border-b-2 border-gray-200 w-full"
                                
                            >
                                <div
                                    className=""
                                >
                                    <div
                                        className="my-4"
                                    >
                                    <p
                                        className="text-xl font-bold cursor-pointer hover:text-blue-500 transition-all duration-300 ease-in-out"
                                        onClick={() => {
                                            navigate(`/product-details/${product.id}`);
                                        }}
                                    >
                                        {product.name}
                                    </p>
                                    </div>
                                    <div
                                        className="flex items-center"
                                    >
                                                <button
                                                    className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition-all duration-300 ease-in-out mr-2"
                                                    onClick={() =>{
                                                        deleteProduct(product.id);
                                                        removeFromCart(product.id);
                                                    }}
                                                >
                                                    Remove
                                                </button>
                                                <button
                                                    className="bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
                                                    onClick={() => {
                                                        updateQuantity(product.id, product.quantity - 1);
                                                        reduceQuantity(product.id);
                                                    }}
                                                >
                                                    -
                                                </button>
                                                <span
                                                    className="text-2xl font-bold mx-2"
                                                >
                                                    {product.quantity}
                                                </span>
                                                <button
                                                    className="bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
                                                    onClick={() => {
                                                        updateQuantity(product.id, product.quantity + 1);
                                                        addToCart(product.id, product.name);
                                                    }}
                                                >
                                                    +
                                                </button>
                                    </div>
                                </div>
                            </div>
                        ))}
    
                        <div
                            className="flex justify-center"
                        >
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out mt-4"
                                onClick={() => {
                                    updateAllCartItems(products);
                                    navigate("/checkout");
                                }}
                            >
                                Checkout
                            </button>
                        </div>                            
                    </div>
                    
                </div>
                )
            }

        </>
    );
    };

export default Cart;