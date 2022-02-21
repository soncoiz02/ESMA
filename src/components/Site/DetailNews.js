import { get } from "../../api/post";

const DetailNews = {
    render: async (id) => {
        const { data } = await get(parseInt(id));
        console.log(data);
        return /*html*/`
            <div class="max-w-7xl flex mx-auto gap-x-5 py-10 min-h-screen">
                <div class="relative w-80 h-80 aspect-square overflow-hidden rounded-xl">
                    <img src=${data.img} class="w-full h-full object-cover" />
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