import toastr from "toastr";
import { get } from "../../api/products";
import { addToCart } from "../../utils/cart";
import { checkLogin } from "../../utils/checkLogin";

const DetailProduct = {
    async render(id) {
        const { data } = await get(id);
        return /*html*/`
            <div class="w-full flex gap-x-20 py-12">
                <div class="w-80 aspect-square overflow-hidden rounded-3xl">
                    <img src="${data.img}" class="w-full h-full object-cover">
                </div>
                <div class="flex flex-col gap-y-3">
                    <p class="font-bold text-indigo-900 text-3xl">${data.name}</p>
                    <p class="text-gray-500">${data.dsc}</p>
                    <p class="font-bold text-xl text-slate-700">Price: <span class="text-red-600">$${data.price}</span></p>
                    <div class="flex items-center gap-x-2">
                        <button class="btn-minus border-none rounded w-5 h-5 bg-red-500 leading-5 text-xl text-white">-</button>
                        <input type="text" value="1" class="rounded h-5 w-10 text-center bg-gray-300" />
                        <button class="btn-plus border-none rounded w-5 h-5 bg-red-500 leading-5 text-xl text-white">+</button>
                    </div>
                    <button data-id="${id}" class="btn-add rounded bg-orange-400 py-3 mt-5 font-bold text-white">Add to cart</button>
                </div>
            </div>
        `;
    },
    afterRender() {
        const btnPlus = document.querySelector(".btn-plus");
        const btnMinus = document.querySelector(".btn-minus");
        const quantityEl = document.querySelector("input");
        btnPlus.onclick = () => {
            quantityEl.value = Number(quantityEl.value) + 1;
        };
        btnMinus.onclick = () => {
            if (Number(quantityEl.value) == 1) return;
            quantityEl.value = Number(quantityEl.value) - 1;
        };

        const btnAddToCart = document.querySelector(".btn-add");
        btnAddToCart.onclick = async () => {
            if (checkLogin) {
                const id = btnAddToCart.dataset.id;
                const { data } = await get(id);

                const cartData = {
                    ...data,
                    quantity: Number(quantityEl.value)
                };

                addToCart(cartData, () => { toastr.success("Add to cart successfully"); });
            }
            else {
                location.href = "/login";
            }
        };
    }
};

export default DetailProduct;