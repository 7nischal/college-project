import { useNavigate } from "react-router-dom";
import { getCart } from "../services/cart-services";
import { useEffect, useState } from "react";
import { createAddress, createOrder, getProductsById } from "../services/black/products-services";
import { getMyId } from "../services/black/user-services";




const Checkout = () => {
    const [cart, setCart] = useState<any>();
    const [paymentDetails, setPaymentDetails] = useState<any>(
        {
            cardNumber: '',
            expiry: '',
            cvv: ''
        }
    );
    const [shippingDetails, setShippingDetails] = useState<any>(
        {
            street_name: '',
            city: '',
            province: '',
            zip: ''
        }
    );
    const navigate  = useNavigate();

    const total = () => {
        let total = 0;
        cart.map((product:any) => {
            if (product.sale) {
                total += (product.price - (product.price * (parseInt(product.sale) / 100))) * product.quantity;
            }
            else {
                total += product.price * product.quantity;
            }
        });
        return total.toFixed(2);
    }

    const getCartItems = async () => {
        let cart = await getCart();
        let newCart = [];
        for (let i = 0; i < cart.length; i++) {
            const product = await getProductsById(cart[i].id);
            let newItem = {
                ...product,
                quantity: cart[i].quantity
            }
            newCart.push(newItem);
        }
        setCart(newCart);
    }

    useEffect(() => {
        getCartItems();
    }
    , []);

    const isFilled = () => {
        if (paymentDetails.cardNumber === '' || paymentDetails.expiry === '' || paymentDetails.cvv === '' || shippingDetails.street_name === '' || shippingDetails.city === '' || shippingDetails.province === '' || shippingDetails.zip === '') {
            return false;
        }
        else {
            return true;
        }
    }

    const placeOrder = async () => {
        if(!isFilled()) {
            return;
        }
        let order:any = {
            product: [],
            address: '',
            user: await getMyId()
        }

        for (let i = 0; i < cart.length; i++) {
            order.product.push(cart[i].id);
        }

        let address = await createAddress(shippingDetails);
        order.address = address.id;

        let newOrder = await createOrder(order);
        // navigate('/order-confirmation');
        console.log(newOrder);
    }

    return (
        <>
            {
                !cart? (
                    <div
                        className="flex items-center justify-center"
                    >
                        <h1
                            className="text-3xl font-bold text-center"
                        >
                            Loading...
                        </h1>
                    </div>
                ):(
                    <div
                        className="flex flex-col items-center justify-center my-8"
                    >
                        <h1
                            className="text-4xl font-bold text-center"
                        >
                            Checkout
                        </h1>
                        <div
                            className="flex flex-col items-center justify-center bg-white p-4 w-10/12 lg:w-1/2 mx-auto mt-4 rounded-lg"
                        >

                                <h2
                                    className="text-2xl font-bold"
                                >
                                    Total: ${total()}
                                </h2>
                            {cart.map((product:any) => (
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
                                                className="text-xl font-bold"
                                            >
                                                {product.name}
                                            </p>
                                            <p
                                                className="text-lg"
                                            >
                                                ${product.price}
                                            </p>
                                            <p
                                                className="text-lg"
                                            >
                                                Quantity: {product.quantity}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div
                                className="flex flex-col items-center justify-center w-full"
                            >
                                <h2
                                    className="text-2xl font-bold"
                                >
                                    Payment Details
                                </h2>
                                <input
                                    type="text"
                                    placeholder="Card Number"
                                    className="border-2 border-gray-300 w-full p-2 rounded-lg my-4 outline-none"
                                    value={paymentDetails.cardNumber}
                                    onChange={(e) => {
                                        setPaymentDetails({...paymentDetails, cardNumber: e.target.value});
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Expiry"
                                    className="border-2 border-gray-300 w-full p-2 rounded-lg my-4 outline-none"
                                    value={paymentDetails.expiry}
                                    onChange={(e) => {
                                        setPaymentDetails({...paymentDetails, expiry: e.target.value});
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="CVV"
                                    className="border-2 border-gray-300 w-full p-2 rounded-lg my-4 outline-none"
                                    value={paymentDetails.cvv}
                                    onChange={(e) => {
                                        setPaymentDetails({...paymentDetails, cvv: e.target.value});
                                    }}
                                >
                                </input>
                            </div>

                            <div
                                className="flex flex-col items-center justify-center w-full"
                            >
                                <h2
                                    className="text-2xl font-bold"
                                >
                                    Shipping Details
                                </h2>
                                <input
                                    type="text"
                                    placeholder="Street Name"
                                    className="border-2 border-gray-300 w-full p-2 rounded-lg my-4 outline-none"
                                    value={shippingDetails.street_name}
                                    onChange={(e) => {
                                        setShippingDetails({...shippingDetails, street_name: e.target.value});
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="City"
                                    className="border-2 border-gray-300 w-full p-2 rounded-lg my-4 outline-none"
                                    value={shippingDetails.city}
                                    onChange={(e) => {
                                        setShippingDetails({...shippingDetails, city: e.target.value});
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Province"
                                    className="border-2 border-gray-300 w-full p-2 rounded-lg my-4 outline-none"
                                    value={shippingDetails.province}
                                    onChange={(e) => {
                                        setShippingDetails({...shippingDetails, province: e.target.value});
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Zip"
                                    className="border-2 border-gray-300 w-full p-2 rounded-lg my-4 outline-none"
                                    value={shippingDetails.zip}
                                    onChange={(e) => {
                                        setShippingDetails({...shippingDetails, zip: e.target.value});
                                    }}
                                />
                            </div>

                            <div
                                className="flex flex-col items-center justify-center w-full"
                            >
                                <h2
                                    className="text-2xl font-bold"
                                >
                                    Total: ${total()}
                                </h2>
                                <button
                                    disabled={!isFilled()}
                                    onClick={placeOrder}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Place Order
                                </button>
                            </div>



                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Checkout;