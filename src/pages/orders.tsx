import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../services/black/products-services";

const Orders = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState<any>();

    const getAllOrders = async () => {
        let _orders:any = await getOrders();
        console.log(_orders);
        setOrders(_orders);
    }

    useEffect(() => {
        getAllOrders();
    }
    , []);

    return (
        <>
            {
                !orders ? (
                    <div
                        className="flex items-center justify-center h-screen"
                    >
                        <svg className="animate-spin h-12 w-12 mr-3" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#10b981" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="#10b981" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.009 8.009 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                ) :
                (

                    <div
                        className="container mx-auto my-10 py-6"
                    >
                        <h1
                            className="text-3xl font-bold text-center"
                        >
                            Your Orders
                        </h1>
                        <div
                            className="flex flex-col items-center"
                        >
                            {
                                orders.map((order:any) => (
                                    <div
                                        onClick = {() => {
                                            navigate(`/order-details/${order.id}`);
                                        }}
                                        key={order.id}
                                        className="flex flex-col items-center bg-white p-4 w-10/12 lg:w-1/2 mx-auto mt-4 rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer"

                                    >
                                        <h2
                                            className="text-2xl font-bold"
                                        >
                                            Order Date
                                            <br />
                                            {order.created.split(' ')[0]}
                                        </h2>
                                        <div
                                            className="flex items-center w-full justify-center border-b-2 border-gray-200 p-4 w-full space-x-4"
                                        >
                                                    <div
                                                        key={order.expand.product[0].id}
                                                        className="items-center justify-center p-4 shadow-lg rounded-lg my-4 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:w-full lg:space-x-4 lg:space-y-0 lg:border-b-2 lg:border-gray-200 "
                                                    >
                                                        <div
                                                            className=" lg:flex"
                                                        >
                                                            <div
                                                                className="my-4"
                                                            >
                                                                <p
                                                                    className="text-xl font-bold cursor-pointer hover:text-blue-500 transition-all duration-300 ease-in-out"
                                                                >
                                                                    {order.expand.product[0].name}
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="my-4"
                                                            >
                                                                <p
                                                                    className="text-xl font-bold"
                                                                >
                                                                    ${order.expand.product[0].price}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="flex items-center"
                                                        >
                                                            <div
                                                                className="flex items-center"
                                                            >
                                                                <p
                                                                    className="text-xl font-bold"
                                                                >
                                                                    Quantity: {order.expand.product[0].quantity}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <p>
                                                        ...
                                                    </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </>
    );
    };

export default Orders;