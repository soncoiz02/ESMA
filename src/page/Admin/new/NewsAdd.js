import { add } from "../../../api/post";

const NewsAdd = {
    render: () => {
        return /*html*/`
        <div>
        <div class="flex w-full px-16">
            <form action="#" class="w-full mt-10" method="POST">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                        <label for="company-website" class="block text-sm font-medium text-gray-700">
                        Title
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm w-full">
                        <input type="text" name="title" id="title" class="focus:ring-indigo-500 outline-none focus:border-indigo-500 flex-1 block w-full py-3 px-3 rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="News title">
                        </div>
                    </div>
                    </div>
                    <div>
                    <label for="about" class="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <div class="mt-1">
                        <textarea name="desc" id="desc" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none mt-1 block py-3 px-3 w-full sm:text-sm border border-gray-300 rounded-md" placeholder="News description"></textarea>
                    </div>
                    </div>
                    <div>
                    <label class="block text-sm font-medium text-gray-700">
                        News photo
                    </label>
                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div class="space-y-1 text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="flex text-sm text-gray-600">
                            <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" class="sr-only">
                            </label>
                            <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" id="btn-add" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Add
                    </button>
                </div>
                </div>
            </form>
        </div>
    </div>
        `;
    },
    afterRender: () => {
        const btnAdd = document.querySelector("#btn-add");
        btnAdd.onclick = (e) => {
            e.preventDefault();
            const title = document.querySelector("#title").value;
            const img = "http://placeimg.com/640/480/cats";
            const desc = document.querySelector("#desc").value;
            add({
                title: title,
                img: img,
                desc: desc
            });
        };
    }
};

export default NewsAdd; 