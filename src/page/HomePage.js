import banner from "../img/banner.jpg";
import { getAll as getProduct } from "../api/products";
import { getAll as getPost } from "../api/post";

const HomePage = {
  async render() {

    const resProduct = await getProduct();
    const dataProduct = await resProduct.data;

    const resPost = await getPost();
    const dataPost = await resPost.data;

    const listProducts = dataProduct.slice(0, 5).map(e => /*html*/`
      <div class="flex flex-col w-56 relative">
        <div class="w-full aspect-square rounded-lg overflow-hidden">
          <img src="${e.img}" class="w-full h-full object-cover ">
        </div>
        <a href="/products/${e.id}" class="font-bold text-gray-600 text-lg mt-1 hover:text-red-500">${e.name}</a>
        <p class="text-gray-400 text-sm text-ellipsis overflow-x-hidden whitespace-nowrap">${e.dsc}</p>
        <p class="absolute rounded-[50px] bg-red-500 font-bold leading-10 text-center pointer-events-none text-sm text-white w-10 h-10 -top-2 -right-2">New</p>
        <p class="ml-auto mt-1 font-bold rounded-[50px] w-10 h-10 border-2 border-white bg-red-500 text-center text-white leading-8 absolute top-1 left-1">$${e.price}</p>
      </div>
    `).join("");

    const listPosts = dataPost.slice(0, 5).map(e => /*html*/`
       <div class="flex flex-col w-56 relative">
        <div class="w-full aspect-square rounded-lg overflow-hidden">
          <img src="${e.img}" class="w-full h-full object-cover ">
        </div>
        <a href="/news/${e.id}" class="font-bold text-gray-600 text-lg mt-1 hover:text-red-500">${e.title}</a>
        <p class="text-gray-400 text-sm text-ellipsis overflow-x-hidden whitespace-nowrap">${e.desc}</p>
        <p class="absolute rounded-[50px] bg-red-500 font-bold leading-10 text-center pointer-events-none text-sm text-white w-10 h-10 -top-2 -right-2">New</p>
      </div>
    `).join("");

    return /*html*/`
      <div class="h-72 text-center relative overflow-hidden">
        <img src=${banner} class="w-full h-full absolute object-cover" />
      </div>
      <div class="max-w-7xl flex flex-col gap-y-3 mx-auto py-10">
        <div class="flex-col gap-y-4">
          <h2 class="text-gray-500 text-3xl font-bold">Latest Dishs</h2>
          <div class="list flex justify-between w-full gap-x-6 mt-5"> 
            ${listProducts}
          </div>
          </div>
      </div>
      <div class="max-w-7xl flex flex-col gap-y-3 mx-auto py-10">
        <div class="flex-col gap-y-4">
          <h2 class="text-gray-500 text-3xl font-bold">Latest News</h2>
          <div class="list flex justify-between w-full gap-x-6 mt-5"> 
            ${listPosts}
          </div>
          </div>
      </div>
    `;
  }
};

export default HomePage;