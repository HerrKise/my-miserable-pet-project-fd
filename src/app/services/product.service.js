import httpService from "./http.service";

const productEndpoint = "product/";

const productService = {
    get: async (id) => {
        const { data } = await httpService.get(productEndpoint + id);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(
            productEndpoint + payload._id,
            payload
        );
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.patch(
            productEndpoint + payload._id,
            payload
        );
        return data;
    },
    remove: async (productId) => {
        const { data } = await httpService.delete(productEndpoint + productId);
        return data;
    },
    fetchAll: async () => {
        const { data } = await httpService.get(productEndpoint);
        return data;
    }
};

export default productService;
