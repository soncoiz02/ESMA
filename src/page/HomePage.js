import { getAll } from "../api/post";
import bg from "../img/bg.jpg";

const HomePage = {
  async render() {
    const { data } = await getAll();
    const listItem = data.slice(0, 3).map(e => /*html*/`
      <div class="item flex flex-col border-2 border-zinc-400 px-4 py-3 mt-4 w-1/3">
        <div class="bg-yellow-600 h-64 w-full relative overflow-hidden">
          <img src="${e.img}" class="absolute w-full h-full object-cover"/>
        </div>
        <div class="font-bold text-yellow-700 text-lg w-full leading-6 mt-3">
          ${e.title}
        </div>
        <div class="w-full leading-4 mt-4">
          ${e.desc}
        </div>
      </div>
    `);

    return /*html*/`
      <div class="banner bg-yellow-600 h-72 mt-3 text-center relative overflow-hidden">
        <img src=${bg} class="w-full h-full absolute object-cover" />
      </div>
      <div class="flex-col gap-y-4">
        <h2 class="text-blue-900 text-xl font-bold">Tin tức học tập</h2>
        <div class="list flex justify-between w-full gap-x-6">
        ${listItem.join("")}
      </div>
      <div class="flex-col gap-y-4">
        <h2 class="text-blue-900 text-xl font-bold">Hoạt động sinh viên</h2>
        <div class="list flex justify-between w-full gap-x-6">
          ${listItem.join("")}
        </div>
      </div>
    `;
  }
};

export default HomePage;