import { decreaseQuantity, getCartData, increaseQuantity } from "../utils/cart";
import { reRender } from "../utils/reRender";

const Cart = {
    async render() {
        const { data } = await getCartData();
        const listItem = data.map(e => /*html*/`
            <div id="list-item" class="w-full flex">
                <div class="w-32 aspect-square overflow-hidden rounded">
                    <img src="${e.img}" class="object-cover w-full h-full"/>
                </div>
                <div class="flex flex-col ml-3 gap-y-2">
                    <p class="text-sky-900 font-bold text-lg">${e.name}</p>
                    <p class="text-sm text-gray-500">${e.dsc}</p>
                    <p class="font-bold text-red-500">$${e.price * e.quantity}</p>
                    <div class="flex gap-x-2 items-center">
                        <button data-id="${e.id}" class="btn-minus bg-red-500 text-white text-sm w-6 h-6 rounded">-</button>
                        <input type="text" value="${e.quantity}" class="bg-gray-200 rounded w-16 text-center outline-none"/>
                        <button data-id="${e.id}" class="btn-plus bg-red-500 text-white text-sm w-6 h-6 rounded">+</button>
                    </div>
                </div>  
            </div>
        `).join("");

        return /*html*/`

            <div class="max-w-7xl flex mx-auto py-10 min-h-screen flex-col gap-y-5">
                ${listItem}
            </div>

        `;
    },
    afterRender() {
        const btnPlus = document.querySelectorAll(".btn-plus");
        const btnMinus = document.querySelectorAll(".btn-minus");

        btnPlus.forEach(btn => {
            const id = btn.dataset.id;
            btn.onclick = () => {
                increaseQuantity(id, () => reRender(Cart, "main"));
            };
        });

        btnMinus.forEach(btn => {
            const id = btn.dataset.id;
            btn.onclick = () => {
                decreaseQuantity(id, () => reRender(Cart, "main"));
            };
        });
    }
};

export default Cart;