import PocketBase from 'pocketbase';

const pb = new PocketBase('https://black.pockethost.io');


const createUsers = async (data:any) => {
    const record = await pb.collection('users').create(data)
    await pb.collection('users').requestVerification(data.email);
    return record;
}

const getUser = async (id:any) => {
    const record = await pb.collection('users').getOne(id);
    return record;
}

const login = async (data:any) => {
    const authData = await pb.collection('users').authWithPassword(
        data.email,
        data.password,
    );
    return authData;
}

const logout = async () => {
    pb.authStore.clear();
    window.location.href = '/';
}

const getMyId = async () => {
    const id = pb.authStore.model?.id;
    return id;
}

const isAuth = async () => {
    const isAuth = pb.authStore.isValid;
    return isAuth;
}

export {
    createUsers,
    getUser,
    login,
    logout,
    getMyId,
    isAuth
};