import axios from "axios";
import configFile from "../config.json";

const http = axios.create({
    baseURL: configFile.apiEndpoint
});

axios.interceptors.response.use(
    (res) => {
        return res;
    },
    function (error) {
        const expectedErrors =
            error.responce &&
            error.responce.status >= 400 &&
            error.responce.status < 500;
        if (!expectedErrors) {
            console.log(error);
        }
        return Promise.reject(error);
    }
);

const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    patch: http.patch
};
export default httpService;
