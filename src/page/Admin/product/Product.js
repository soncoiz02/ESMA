import { getAll } from "../../../api/products";

const AdminProduct = {
    async render() {

        const { data } = await getAll();

        const listItem = data.map(item => `
            <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">${item.id}</div>
                    </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900 font-bold">${item.name}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="w-16 h-16 overflow-hidden rounded-md relative">
                        <img src=${item.img} class="w-full h-full object-cover absolute" />
                    </div>
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">
                    ${item.dsc}
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">
                    ${item.price}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="/admin/products/edit/${item.id}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <p class="text-red-600 cursor-pointer" id="btn-delete" data-id=${item.id}>Delete</p>
                </td>
            </tr>
        `).join("");

        return /*html*/`
            <div class="lg:flex lg:items-center lg:justify-between py-5 px-5">
                <div class="flex-1 min-w-0">
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Admin Products
                </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                <span class="sm:ml-3">
                    <a href="/admin/products/add" type="button"
                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <!-- Heroicon name: solid/check -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add
                    </a>
                </span>
                </div>
            </div>
            <main class="lg:flex lg:items-center lg:justify-center">
            <div class="flex flex-col max-w-7xl">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="max-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Id
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Image
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Price
                            </th>
                            <th scope="col" class="relative px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                            <th scope="col" class="relative px-6 py-3">
                                <span class="sr-only">Delete</span>
                            </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            ${listItem}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
            </main>
        `;
    }
};

export default AdminProduct;