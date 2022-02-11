import { getAll } from "../api/products";

const Products = {
    async render() {
        const { data } = await getAll();
        const renderStar = (num) => {
            let listStar = "";
            for (let i = 0; i < num; i++) {
                listStar += `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="gold">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                `;
            }
            console.log(listStar);
            return listStar;
        };
        const listItem = data.map(e => /*html*/`
            <div class="w-1/5 flex flex-col relative">
                <div class="relative aspect-square rounded-xl overflow-hidden shadow-[0_0_5px_1px_rgba(0,0,0,0.1)]">
                    <img src="${e.img}" class="w-full h-full object-cover">
                </div>
                <a href="#" class="font-bold text-blue-900 mt-1 text-lg">${e.name}</a>
                <div class="text-sm">${e.dsc}</div>
                <div class="absolute -top-1 -right-1 px-5 py-1 bg-red-500 rounded font-bold text-sm text-white">$${e.price}</div>
                <div class="absolute px-1 py-1 rounded bg-blend-darken flex flex-col justify-between gap-y-1 bg-indigo-50">${renderStar(e.rate)}</div>
            </div>
        `).join("");
        return /*html*/`
            <div class="w-full relative">
                <div class="max-w-6xl py-8 p-x8 flex justify-between flex-wrap gap-y-5 gap-x-3 mx-auto">
                    ${listItem}
                </div>
            </div>
        `;
    }
};

export default Products;