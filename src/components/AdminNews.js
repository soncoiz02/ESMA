import data from "../data";
const AdminNews = {
    render: () => {
        const listItem = data.map(item => {
            return `
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="w-16 h-16 overflow-hidden rounded-md relative">
                            <img src=${item.img} class="w-full h-full object-cover absolute" />
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">${item.title}</div>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                        ${item.desc}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="/admin/news/edit/${item.id}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                </tr>
            `;
        });
        return /*html*/`
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Image
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Title
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th scope="col" class="relative px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            ${listItem.join("")}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        `;
    }
};

export default AdminNews;