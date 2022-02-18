let cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}
const userId = JSON.parse(localStorage.getItem("user")).id;
const userCart = cart.find(e => e.uid == userId);

export const addToCart = (data, next) => {
    if (cart.length > 0) {
        if (userCart) {
            const currentData = userCart.data.find(e => e.id == data.id);
            if (currentData) {
                currentData.quantity += data.quantity;
            }
            else {
                userCart.data.push(data);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        else {
            const newUserCart = {
                uid: userId,
                data: [
                    {
                        ...data
                    }
                ]
            };

            cart.push(newUserCart);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }
    else {
        localStorage.setItem("cart", JSON.stringify([{ uid: userId, data: [{ ...data }] }]));
    }
    next();
};

export const getCartData = () => {
    return cart.find(e => e.uid == userId);
};

export const increaseQuantity = (id, next) => {
    userCart.data.find(e => e.id == id).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};

export const decreaseQuantity = (id, next) => {
    const currentProduct = userCart.data.find(e => e.id == id);
    if (currentProduct.quantity == 1) return;
    currentProduct.quantity--;
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};