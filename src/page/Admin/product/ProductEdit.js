import axios from "axios";
import instance from "../../../api/config";
import { edit, get } from "../../../api/products";

const ProductEdit = {
    async render(id) {
        const { data } = await get(id);
        const resCate = await instance.get("http://localhost:3001/cateProducts");
        const dataCate = await resCate.data;

        const currentCate = dataCate.find(e => e.id == data.cateProductId);

        const listCate = dataCate.filter(e => e.id != data.cateProductId).map(e => `
            <option value="${e.id}">${e.name}</option>
        `).join("");

        return /*html*/`
            <div>
            <div class="flex w-full px-16">
                <form id="form-add" class="w-full mt-10" method="POST">
                    <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div class="col-span-3 sm:col-span-2">
                            <label for="name" class="block text-sm font-medium text-gray-700">
                            Name
                            </label>
                            <div class="mt-1 flex rounded-md shadow-sm w-full">
                            <input type="text" id="name" value="${data.name}" class="focus:ring-indigo-500 outline-none focus:border-indigo-500 flex-1 block w-full py-3 px-3 rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Product name">
                            </div>
                        </div>
                        <div class="col-span-3 sm:col-span-2">
                            <label for="desc" class="block text-sm font-medium text-gray-700">
                            Description
                            </label>
                            <div class="mt-1 flex rounded-md shadow-sm w-full">
                            <input type="text" id="desc" value="${data.dsc}" class="focus:ring-indigo-500 outline-none focus:border-indigo-500 flex-1 block w-full py-3 px-3 rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Description">
                            </div>
                        </div>
                        <div class="col-span-3 sm:col-span-2">
                            <label for="price" class="block text-sm font-medium text-gray-700">
                            Price
                            </label>
                            <div class="mt-1 flex rounded-md shadow-sm w-full">
                            <input type="text" id="price" value="${data.price}" class="focus:ring-indigo-500 outline-none focus:border-indigo-500 flex-1 block w-full py-3 px-3 rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Price">
                            </div>
                        </div>
                        <div class="col-span-3 sm:col-span-2">
                            <label for="cate" class="block text-sm font-medium text-gray-700">
                            Category
                            </label>
                            <div class="mt-1 flex rounded-md shadow-sm w-full">
                                <select id="cate" class="focus:ring-indigo-500 outline-none focus:border-indigo-500 flex-1 block w-full py-3 px-3 rounded-none rounded-r-md sm:text-sm border-gray-300"x> 
                                    <option value="${currentCate.id}">${currentCate.name}</option>
                                    ${listCate}
                                </select>
                            </div>
                        </div>
                        <label class="block text-sm font-medium text-gray-700">
                            News photo
                        </label>
                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div class="space-y-1 text-center">
                                <div class="preview">
                                    <div class="w-56 aspect-square">
                                        <img src="${data.img}" class="preview-img w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div class="flex text-sm text-gray-600 justify-center">
                                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                    <input type="hidden" id="current-img" value="${data.img}">
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
                        <button type="submit" data-id="${id}" id="btn-edit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
        const fileInput = document.querySelector("#file-upload");
        const resultElement = document.querySelector(".preview");
        const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/deqhqs09b/image/upload";
        const CLOUDINARY_PRESET = "wygilq4n";

        const btnEdit = document.querySelector("#btn-edit");

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
                        <img src="${url}" class="preview-img w-full h-full object-cover" />
                    </div>
                `;
            };
        });

        const getImgLink = async (file) => {
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);

                const { data } = await axios.post(CLOUDINARY_API, formData, {
                    headers: {
                        "Content-Type": "application/form-data"
                    }
                });

                const imgLink = data.url;
                return imgLink;
            }
        };

        btnEdit.onclick = async (e) => {
            e.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const desc = document.querySelector("#desc").value.trim();
            const price = document.querySelector("#name").value.trim();
            const cate = document.querySelector("#cate").value.trim();
            const currentImg = document.querySelector("#current-img").value.trim();
            const id = btnEdit.dataset.id;

            let imgLink = "";

            const imgFile = fileInput.files[0];
            if (imgFile) {
                imgLink = await getImgLink(imgFile);
            }

            const dataEdit = {
                name: name,
                dsc: desc,
                price: Number(price),
                cateProductId: Number(cate),
                img: imgLink != "" ? imgLink : currentImg
            };

            const { data } = await edit(id, dataEdit);
            if (data) {
                alert("Edit product success");
            }
        };
    }
};

export default ProductEdit;