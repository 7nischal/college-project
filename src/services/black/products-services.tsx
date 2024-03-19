import PocketBase from 'pocketbase';

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

export {
    getProducts,
    getProductsById,
    createOrder,
    createAddress
};