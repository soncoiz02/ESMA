import { reRender } from "../utils/reRender";

const Header = {
    async render() {
        return `
        <div class="fixed top-0 left-0 w-full shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] z-50 bg-white">
            <div class="max-w-7xl py-3 h-20 flex justify-between items-center mx-auto">
                <ul class="link flex gap-3 px-5 py-3">
                    <li><a href="/" class="text-gray-600 font-bold text-xl hover:text-red-500">Home</a></li>
                    <li><a href="/#/news" class="text-gray-600 font-bold text-xl hover:text-red-500">News</a></li>
                    <li><a href="/products/burger?_page=1&_limit=20" class="text-gray-600 font-bold text-xl hover:text-red-500">Products</a></li>
                </ul>
                <div class="flex gap-x-2 items-center">
                    <a href="/#/cart" class="text-gray-600 font-bold text-xl hover:text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                    </a>
                    <div class="user group relative flex items-center">
                        <a href="/signin" class="ml-2 bg-red-500 rounded-[50px] font-bold border-zinc-50 px-8 py-2 text-white">Sign In</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        const userEl = document.querySelector(".user");
        if (user) {
            userEl.innerHTML = /*html*/`
                <p class="font-bold text-white bg-red-500 px-5 py-1 rounded-[50px]">${user.username}</p>
                <button id="btn-logout" class="text-gray-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition absolute w-full border border-gray-400 top-8 bg-white font-bold rounded px-2">Logout</button>
            `;
            if (user.id == 1) {
                document.querySelector(".link").insertAdjacentHTML("beforeend", "<li><a href=\"/#/admin/dashboard\" class=\"text-gray-600 font-bold text-xl hover:text-red-500\">Admin</a></li>");
            }

            const btnLogout = document.querySelector("#btn-logout");
            btnLogout.onclick = () => {
                localStorage.removeItem("user");
                reRender(Header, "header");
            };
        }
    }
};

export default Header;