import { useState } from "react";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [order, setOrder] = useState<any>({
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
    });
    
    return (
        <div>
            <h1
                className="text-3xl font-bold text-center my-4"
            >
                Order Details
            </h1>
            <div
                className="flex flex-col items-center bg-white p-4 w-10/12 lg:w-1/2 mx-auto mt-4 rounded-lg"
            >
                <h2
                    className="text-2xl font-bold text-center my-6"
                >
                    Order {order.id}
                </h2>
                <h3
                    className="text-xl font-bold text-center my-6"
                >
                    Date: {order.date}
                </h3>
                <div
                    className="flex flex-col items-center bg-white p-4 w-10/12  mx-auto mt-4 rounded-lg"
                >
                    {order.products.map((product:any) => (
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
                                        className="text-xl font-bold text-gray-800"
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
                                ${order.products.reduce((acc:any, product:any) => acc + (product.price * product.quantity), 0)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;