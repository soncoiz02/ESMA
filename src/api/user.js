import instance from "./config";

export const addUser = (user) => {
    const url = "/user";
    return instance.post(url, user);
};