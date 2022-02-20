import { getAll } from "../api/post";

const News = {
    async render() {
        const { data } = await getAll();
        const listItem = data.map(item => {
            return /*html*/`
            <div class="w-1/4 flex flex-col items-center gap-y-1">
                <div class="relative aspect-video w-80 rounded-xl overflow-hidden">
                    <img src="${item.img}" class="w-full h-full object-cover"/>
                </div>
                <a href="news/${item.id}" class="font-bold text-blue-900 text-xl">${item.title}</a>
                <div class="text-gray-400 text-sm ">${item.desc}</div>
            </div>
            `;
        });

        return /*html*/`
        <div class="max-w-7xl flex flex-col gap-y-3 mx-auto py-10">
            <div class="font-bold text-2xl text-blue-900">Tin tức mới nhất</div>
            <div class="w-full flex flex-wrap justify-between gap-x-1 gap-y-4 mt-3">
                ${listItem.join("")}
            </div>
        </div>
            
        `;
    }
};

export default News;