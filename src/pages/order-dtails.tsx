import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOrdersById } from "../services/black/products-services";


const OrderDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [order, setOrder] = useState<any>();
    const navigate = useNavigate();

    const getAllOrders = async () => {
        const orders = await getOrdersById(id);
        // console.log(orders);
        await updateDetails(orders);
    }

    const updateDetails = (data:any) => {
            data.cart.map((item:any) => {
                const cartItem = data.expand.product.find((product:any) => product.id == item.id);
                cartItem.quantity = item.quantity;
            });
            setOrder(data);
    }

    useEffect(() => {
        getAllOrders();
    }
    , []);

    return (
        <>
            {
                !order ? (
                    <div
                        className="flex items-center justify-center h-screen"
                    >
                        <svg className="animate-spin h-12 w-12 mr-3" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#10b981" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="#10b981" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.009 8.009 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                ) :(

                    <div>
                        <h1
                            className="text-3xl font-bold text-center my-4 py-6"
                        >
                            Order Details
                        </h1>
                        <div
                            className="flex flex-col items-center bg-white p-4 w-10/12 lg:w-1/2 mx-auto mt-4 rounded-lg"
                        >
                            <h2
                                className="text-2xl font-bold text-center my-6"
                            >
                                Order
                            </h2>
                            <h3
                                className="text-xl font-bold text-center my-6"
                            >
                                Date: {order.created.split(' ')[0]}
                            </h3>
                            <div
                                className="flex flex-col items-center bg-white p-4 w-10/12  mx-auto mt-4 rounded-lg"
                            >
                                {order.expand.product.map((product:any) => (
                                    <div
                                        key={product.id}
                                        className="flex items-center justify-between p-4 border-b-2 border-gray-200 w-full"
                                    >
                                        <div
                                            className=" lg:flex"
                                        >
                                            <div
                                                className="my-4"
                                            >
                                                <p
                                                    className="text-xl font-bold cursor-pointer text-blue-500 hover:text-blue-600 transition-all duration-300 ease-in-out underline"
                                                    onClick={() => {
                                                        navigate(`/product-details/${product.id}`);
                                                    }}
                                                >
                                                    {product.name}
                                                </p>
                                                <p
                                                    className="text-gray-600"
                                                >
                                                    ${product.price} x {product.quantity}
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="flex items-center"
                                        >
                                            <p
                                                className="text-xl font-bold text-gray-800"
                                            >
                                                ${product.price * product.quantity}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                <div
                                    className="flex items-center justify-between p-4 border-b-2 border-gray-200 w-full"
                                >
                                    <div
                                        className="flex items-center"
                                    >
                                        <p
                                            className="text-xl font-bold text-gray-800"
                                        >
                                            Total
                                        </p>
                                    </div>
                                    <div
                                        className="flex items-center"
                                    >
                                        <p
                                            className="text-xl font-bold text-gray-800"
                                        >
                                            ${order.total}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default OrderDetails;