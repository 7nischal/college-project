import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrdersById } from "../services/black/products-services";


const OrderDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [order, setOrder] = useState<any>();
    

    const getAllOrders = async () => {
        const orders = await getOrdersById(id);
        console.log(orders);
        setOrder(orders);
    }

    const updateDetails = (data: any) => {
        if (data && data.expand && data.expand.product) {
            const updatedProducts = data.expand.product.map((product: any) => {
                // Calculate the discounted price
                const discountedPrice = product.price - (product.price * product.discount) / 100;
                
                
                // Add or update details about the product
                return {
                    ...product,
                    discountedPrice,
                    totalPrice: discountedPrice * product.quantity
                };
            });

            // Update the total price
            const updatedTotal = updatedProducts.reduce((acc: number, product: any) => acc + product.totalPrice, 0);

            // Set the updated order details
            setOrder({
                ...data,
                expand: {
                    ...data.expand,
                    product: updatedProducts
                },
                total: updatedTotal
            });
        }
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
                        <p
                            className="text-2xl font-bold"
                        >
                            Loading...
                        </p>
                    </div>
                ) :(

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
                                            ${order.expand.product.reduce((acc:any, product:any) => acc + (product.price * product.quantity), 0)}
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