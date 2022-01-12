import data from "../data";

const listItem = data.map(item => {
    return /*html*/`
    <div class="w-1/4 flex flex-col items-center gap-y-1">
        <div class="relative w-full h-40 overflow-hidden">
            <img src="${item.img}" class="w-full h-full object-cover absolute"/>
        </div>
        <a href="news/detail?id=${item.id}" class="font-bold text-blue-900 text-xl">${item.title}</a>
        <div class="text-gray-400 text-sm ">${item.desc}</div>
    </div>
    `;
});

const News = {
    render: () => {
        return /*html*/`
        <div class="flex flex-col gap-y-5 w-full my-4">
            <div class="font-bold text-2xl text-blue-900">Tin tức mới nhất</div>
            <div class="w-full flex flex-wrap justify-between gap-x-1 gap-y-4">
                ${listItem.join("")}
            </div>
        </div>
            
        `;
    }
};

export default News;