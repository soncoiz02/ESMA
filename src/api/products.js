import instance from "./config";

export const getAll = () => {
    const url = "/products";
    return instance.get(url);
};

export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};

export const getFilter = (param) => {
    const url = `/products${param}`;
    return instance.get(url);
};

export const add = (data) => {
    const url = `/products`;
    return instance.post(url, data);
};

export const edit = (id, data) => {
    const url = `/products/${id}`;
    return instance.patch(url, data);
};

export const deleteProduct = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};