import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([
        {
            id: 1,
            date: '2021-10-01',
            products: [
                {
                    id: 1,
                    name: 'Product 1',
                    price: 19.99,
                    image: 'https://via.placeholder.com/150',
                    quantity: 2
                },
                {
                    id: 2,
                    name: 'Product 2',
                    price: 29.99,
                    image: 'https://via.placeholder.com/150',
                    quantity: 1
                }
            ]
        },
        {
            id: 2,
            date: '2021-10-02',
            products: [
                {
                    id: 3,
                    name: 'Product 3',
                    price: 39.99,
                    image: 'https://via.placeholder.com/150',
                    quantity: 3
                },
                {
                    id: 4,
                    name: 'Product 4',
                    price: 49.99,
                    image: 'https://via.placeholder.com/150',
                    quantity: 1
                }
            ]
        },
        {
            id: 3,
            date: '2021-10-03',
            products: [
                {
                    id: 5,
                    name: 'Product 5',
                    price: 59.99,
                    image: 'https://via.placeholder.com/150',
                    quantity: 1
                },
                {
                    id: 6,
                    name: 'Product 6',
                    price: 69.99,
                    image: 'https://via.placeholder.com/150',
                    quantity: 2
                }
            ]
        },
    ]);

    return (
        <div
            className="container mx-auto my-10"
        >
            <h1
                className="text-3xl font-bold text-center"
            >
                Orders
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
                                Order Date: {order.date}
                            </h2>
                            <div
                                className="flex items-center w-full justify-center border-b-2 border-gray-200 p-4 w-full space-x-4"
                            >
                                        <div
                                            key={order.products[0].id}
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
                                                        {order.products[0].name}
                                                    </p>
                                                </div>
                                                <div
                                                    className="my-4"
                                                >
                                                    <p
                                                        className="text-xl font-bold"
                                                    >
                                                        ${order.products[0].price}
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
                                                        Quantity: {order.products[0].quantity}
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
    );
    };

export default Orders;