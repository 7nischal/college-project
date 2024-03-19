import Cookies from "js-cookie";

const dispatchCartUpdate = () => {
    window.dispatchEvent(new CustomEvent('cartUpdated'));
};

const addToCart = (id:any, name?:any) => {
    let cart = Cookies.get("cart");
    if (cart) {
        let cartArray = JSON.parse(cart);
        let existingItem = cartArray.find((item:any) => item.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartArray.push({
                id: id,
                name: name,
                quantity: 1
            });
        }
        Cookies.set("cart", JSON.stringify(cartArray));
    } else {
        Cookies.set("cart", JSON.stringify([{ id: id, quantity: 1, name: name}]));
    }
    dispatchCartUpdate();
};

const getCart = () => {
    let cart = Cookies.get("cart");
    return cart ? JSON.parse(cart) : [];
};

const removeFromCart = (id:any) => {
    let cart = Cookies.get("cart");
    if (cart) {
        let cartArray = JSON.parse(cart);
        let newCart = cartArray.filter((item:any) => item.id !== id);
        Cookies.set("cart", JSON.stringify(newCart));
        dispatchCartUpdate();
    }
};

const reduceQuantity = (id:any) => {
    let cart = Cookies.get("cart");
    if (cart) {
        let cartArray = JSON.parse(cart);
        let existingItem = cartArray.find((item:any) => item.id === id);
        if (existingItem) {
            existingItem.quantity -= 1;
            if (existingItem.quantity === 0) {
                removeFromCart(id);
            } else {
                Cookies.set("cart", JSON.stringify(cartArray));
            }
            dispatchCartUpdate();
        }
    }
};

const getItemQuantity = (id:any) => {
    let cart = Cookies.get("cart");
    if (cart) {
        let cartArray = JSON.parse(cart);
        let existingItem = cartArray.find((item:any) => item.id === id);
        if (existingItem) {
            return existingItem.quantity;
        }
    }
    return 0;
};

const getTotalItems = () => {
    let cart = Cookies.get("cart");
    if (cart) {
        let cartArray = JSON.parse(cart);
        return cartArray.reduce((sum:any, item:any) => sum + item.quantity, 0);
    }
    return 0;
}

const updateAllCartItems = (cartItems:any) => {
    Cookies.set("cart", JSON.stringify(cartItems));
    dispatchCartUpdate();
}

const clearCart = () => {
    Cookies.remove("cart");
    dispatchCartUpdate();
}

export {
    addToCart,
    getCart,
    removeFromCart,
    getItemQuantity,
    reduceQuantity,
    getTotalItems,
    updateAllCartItems,
    clearCart
};
