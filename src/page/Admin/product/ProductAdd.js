import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";

const ProductAdd = {
    async render() {

        return /*html*/`
        <div>
            <div class="flex w-full px-16">
                <form id="form-add" class="w-full mt-10" method="POST">
                    <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div class="col-span-3 sm:col-span-2">
                            <label for="company-website" class="block text-sm font-medium text-gray-700">
                            Name
                            </label>
                            <div class="mt-1 flex rounded-md shadow-sm w-full">
                            <input type="text" name="title" id="title" class="focus:ring-indigo-500 outline-none focus:border-indigo-500 flex-1 block w-full py-3 px-3 rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="News title">
                            </div>
                        </div>
                        <div>
                        <div class="col-span-3 sm:col-span-2">
                            <label for="company-website" class="block text-sm font-medium text-gray-700">
                            Description
                            </label>
                            <div class="mt-1 flex rounded-md shadow-sm w-full">
                            <input type="text" name="title" id="title" class="focus:ring-indigo-500 outline-none focus:border-indigo-500 flex-1 block w-full py-3 px-3 rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="News title">
                            </div>
                        </div>
                        <div class="col-span-3 sm:col-span-2">
                            <label for="company-website" class="block text-sm font-medium text-gray-700">
                            Price
                            </label>
                            <div class="mt-1 flex rounded-md shadow-sm w-full">
                            <input type="text" name="title" id="title" class="focus:ring-indigo-500 outline-none focus:border-indigo-500 flex-1 block w-full py-3 px-3 rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="News title">
                            </div>
                        </div>
                        <div>
                        <label class="block text-sm font-medium text-gray-700">
                            News photo
                        </label>
                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div class="space-y-1 text-center">
                                <div class="preview">
                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div class="flex text-sm text-gray-600 justify-center">
                                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                    </label>
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
    afterRender() {
        const formAdd = $("#form-add");
        const fileInput = document.querySelector("#file-upload");
        const resultElement = document.querySelector(".preview");
        const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
        const btnAdd = document.querySelector("#btn-add");

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";
        const CLOUDINARY_PRESET = "jkbdphzy";

        let imgLink = "";

        fileInput.addEventListener("change", (e) => {
            const files = e.target.files;
            const file = files[0];
            const fileType = file["type"];
            if (!validImageTypes.includes(fileType)) {
                resultElement.insertAdjacentHTML(
                    "beforeend",
                    "<span class=\"preview-img\">Chọn ảnh đi :3</span>"
                );
                return;
            }

            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = function () {
                const url = fileReader.result;
                resultElement.innerHTML = `
                    <div class="w-56 aspect-square">
                    <img src="${url}" alt="${file.name}" class="preview-img w-full h-full object-cover" />
                    </div>
                `;
            };
        });

        const getImgLink = async () => {
            const file = fileInput[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload-preset", CLOUDINARY_PRESET);

                const { data } = await axios.post(CLOUDINARY_API, formData, {
                    headers: {
                        "Content-Type": "application/form-data"
                    }
                });

                imgLink = data.img;
                console.log(data, imgLink);
            }
        };

        btnAdd.onclick = (e) => {
            e.preventDefault();
            getImgLink();
        };


        // formAdd.validate({
        //     rules: {
        //         "name": {
        //             require: true
        //         },
        //         "dsc": {
        //             require: true
        //         },
        //         "price": {
        //             require: true,
        //             number: true
        //         },
        //         "img": {
        //             require: true
        //         }
        //     },
        //     submitHandler: () => {
        //         const addProduct = async () => {

        //         };

        //         addProduct();
        //     }
        // });
    }
};

export default ProductAdd;