import { getFilter } from "../../api/products";
import instance from "../../api/config";

const searchParam = new URL(window.location).searchParams;

const Products = {
    async render(cate) {

        const resCate = await instance.get("http://localhost:3001/cateProducts");
        const dataCate = await resCate.data;
        const currentCateId = dataCate.find(e => e.name.toLowerCase() == cate).id;

        const searchVal = searchParam.get("q");

        const filterParam = location.search;

        const { data } = await getFilter(`${filterParam}&cateProductId=${currentCateId}`);
        const dataProducts = data;

        const renderStar = (num) => {
            let listStar = "";
            for (let i = 0; i < num; i++) {
                listStar += `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="gold">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                `;
            }
            return listStar;
        };

        const listItem = dataProducts.map(e => /*html*/`
            <div class="w-1/5 flex flex-col relative">
                <div class="relative aspect-square rounded-xl overflow-hidden shadow-[0_0_5px_1px_rgba(0,0,0,0.1)]">
                    <img src="${e.img}" class="w-full h-full object-cover">
                </div>
                <a href="/products/${e.id}" class="font-bold text-blue-900 mt-1 text-lg">${e.name}</a>
                <div class="text-sm">${e.dsc}</div>
                <div class="absolute -top-1 -right-1 px-5 py-1 bg-red-500 rounded font-bold text-sm text-white">$${e.price}</div>
                <div class="absolute px-1 py-1 rounded bg-blend-darken flex flex-col justify-between gap-y-1 bg-indigo-50">${renderStar(e.rate)}</div>
            </div>
        `).join("");

        const listCate = dataCate.map(e => `
            <a href="/products/${e.name.toLowerCase()}?_page=1&_limit=20" class="py-3 px-3 rounded-[50px] ${e.id == currentCateId ? "bg-red-500 text-white" : "bg-white text-red-500 border-2 border-red-500"}  font-bold text-base text-center">${e.name}</a>
        `).join("");

        return /*html*/`
            <div class="w-full relative min-h-screen">
                <div class="max-w-7xl flex mx-auto py-10">
                    <div class="w-60 flex flex-col px-5 py-5 gap-y-5 sticky top-20">
                        <div class="flex flex-col gap-y-3">
                            <h2 class="text-center font-bold text-gray-700 text-2xl pb-3 border-b border-gray-400">Menu</h2>
                            ${listCate}
                        </div>
                        <div class="flex flex-col gap-y-3">
                            <h2 class="text-center font-bold text-gray-700 text-2xl pb-3 border-b border-gray-400">Sort</h2>
                            <div class="flex flex-col gap-2">
                                <p class="text-base font-bold text-gray-900">Sort by Price</p>
                                <a href="/products/${cate}?${searchVal ? `q=${searchVal}&` : ""}_page=1&_limit=20&_sort=price&_order=asc">Low to High</a>
                                <a href = "/products/${cate}?${searchVal ? `q=${searchVal}&` : ""}_page=1&_limit=20&_sort=price&_order=desc" > High to Low</a>
                            </div >
                        <div class="flex flex-col gap-2">
                            <p class="text-base font-bold text-gray-900">Sort by Name</p>
                            <a href="/products/${cate}?${searchVal ? `q=${searchVal}&` : ""}_page=1&_limit=20&_sort=name&_order=asc">A to Z</a>
                            <a href="/products/${cate}?${searchVal ? `q=${searchVal}&` : ""}_page=1&_limit=20&_sort=name&_order=desc">Z to A</a>
                        </div>
                        </div >
                    </div >
    <div class="w-[calc(100%_-_240px)] px-5 flex flex-col mx-auto gap-y-5">
        <form class="flex items-center relative w-96">
            <input type="text" id="search" placeholder="Search" class="py-2 px-5 w-96 rounded-[50px] border border-red-500 outline-none">
                <button data-cate="${cate}" id="btn-search" class="absolute right-3 bg-red-500 rounded-[50px] w-7 h-7 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
        </form>
        <div class="flex flex-col gap-y-3 items-center">
            <div class="w-full flex justify-between gap-y-5 gap-x-3 flex-wrap">
                ${listItem}
            </div>
            <div class="flex gap-x-3">
                <button data-cate="${cate}" class="btn-prev w-10 h-6 text-sm text-center leading-6 rounded bg-red-500 text-white">Prev</button>
                <div class="show-page w-6 h-6 rounded bg-gray-300 text-center text-sm"></div>
                <button data-cate="${cate}" class="btn-next w-10 h-6 text-sm text-center leading-6 rounded bg-red-500 text-white">Next</button>
            </div>
        </div>
    </div>
                </div >
            </div >
    `;
    },
    afterRender() {

        const btnSearch = document.querySelector("#btn-search");
        const currentPage = Number(searchParam.get("_page"));
        const searchVal = searchParam.get("q");
        const orderType = searchParam.get("_order");
        const sortBy = searchParam.get("_sort");

        btnSearch.onclick = (e) => {
            e.preventDefault();
            const cate = btnSearch.dataset.cate;
            const searchValue = document.querySelector("#search").value.trim();
            if (searchValue != "") {
                location.href = `/products/${cate}?q=${searchValue}&_page=${currentPage}&_limit=20`;
            }
        };

        document.querySelector(".show-page").innerHTML = currentPage;

        const btnPrev = document.querySelector(".btn-prev");
        const btnNext = document.querySelector(".btn-next");

        btnPrev.onclick = () => {
            if (currentPage == 1) return;
            const cate = btnPrev.dataset.cate;
            location.href = `/products/${cate}?_page=${currentPage - 1}&_limit=20`;
        };

        btnNext.onclick = () => {
            const cate = btnPrev.dataset.cate;
            location.href = `/products/${cate}?_page=${currentPage + 1}&_limit=20`;
        };

    }
};

export default Products;