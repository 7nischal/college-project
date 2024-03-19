import PocketBase from 'pocketbase';
import { getMyId } from './user-services';

const pb = new PocketBase('https://black.pockethost.io');

const getProducts = async () => {
    const records = await pb.collection('products').getFullList();
    return records;
}

const getProductsById = async (id:any) => {
    const record = await pb.collection('products').getOne(id);
    return record;
}

const createOrder = async (data:any) => {
    const record = await pb.collection('orders').create(data);
    return record;
}

const createAddress = async (data:any) => {
    const record = await pb.collection('address').create(data);
    return record;
}

const getOrders = async () => {
    let myId = await getMyId();
    const records = await pb.collection('orders').getFullList(
        {
            filter: "user.id = '" + myId + "'",
            expand: 'product'
        }
    );
    return records;
}

const getOrdersById = async (id:any) => {
    const record = await pb.collection('orders').getOne(id, {
        expand: 'product'
    });
    return record;
}

// api/files/COLLECTION_ID_OR_NAME/RECORD_ID/FILENAME
const productImageUrl = () => {
    return "https://black.pockethost.io/api/files/products/";
}

export {
    getProducts,
    getProductsById,
    createOrder,
    createAddress,
    getOrders,
    getOrdersById,
    productImageUrl
};