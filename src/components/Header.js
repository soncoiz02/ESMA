import { reRender } from "../utils/reRender";

const Header = {
    async render() {
        return `
        <div class="flex justify-between items-center bg-yellow-600 px-5">
            <ul class="link flex gap-3 px-5 py-3">
            <li><a href="/" class="text-white hover:underline">Home</a></li>
            <li><a href="/#/news" class="text-white hover:underline">News</a></li>
            <li><a href="/#/products" class="text-white hover:underline">Products</a></li>
            <li><a href="/#/cart" class="text-white hover:underline">Cart</a></li>
            <li><a href="/#/admin/dashboard" class="text-white hover:underline">Admin</a></li>
            </ul>
            <div class="user flex gap-x-2">
                <a href="/signin" class="ml-2 bg-blue-900 border-zinc-50 px-5 py-1 text-white">Sign In</a>
            </div>
        </div>
        `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        const userEl = document.querySelector(".user");
        if (user) {
            userEl.innerHTML = /*html*/`
                <p class="font-bold text-white">${user.username}</p>
                <button id="btn-logout" class="text-blue-900 bg-white font-bold rounded px-2">Logout</button>
            `;

            const btnLogout = document.querySelector("#btn-logout");
            btnLogout.onclick = () => {
                localStorage.setItem("user", "");
                reRender(Header, ".nav");
            };
        }
    }
};

export default Header;