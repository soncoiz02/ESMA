import data from "../../data";

const DetailNews = {
    render: (id) => {
        const detail = data.find(item => item.id === id);
        return /*html*/`
            <div class="flex gap-x-6 py-16 w-full">
                <div class="relative w-80 h-80 overflow-hidden">
                    <img src=${detail.img} class="absolute w-full h-full object-cover" />
                </div>
                <div class="flex flex-col gap-y-3 w-2/3">
                    <div class="font-bold text-blue-900 text-3xl">${detail.title}</div>
                    <div class="text-xl text-gray-400">${detail.desc}</div>
                </div>
            </div>
        `;
    }
};

export default DetailNews;