import { get } from "../../api/post";

const DetailNews = {
    render: async (id) => {
        const { data } = await get(parseInt(id));
        console.log(data);
        return /*html*/`
            <div class="flex gap-x-6 py-16 w-full">
                <div class="relative w-80 h-80 overflow-hidden">
                    <img src=${data.img} class="absolute w-full h-full object-cover" />
                </div>
                <div class="flex flex-col gap-y-3 w-2/3">
                    <div class="font-bold text-blue-900 text-3xl">${data.title}</div>
                    <div class="text-xl text-gray-400">${data.desc}</div>
                </div>
            </div>
        `;
    }
};

export default DetailNews;