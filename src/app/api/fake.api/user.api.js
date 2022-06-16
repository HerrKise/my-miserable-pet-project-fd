import categories from "./categories.api";

const products = [
    {
        _id: 1,
        name: "Пылесос",
        category: categories.appliances,
        quantity: 54,
        price: 7750,
        photo: "https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        _id: 2,
        name: "Холодильник",
        category: categories.appliances,
        quantity: 68,
        price: 31500,
        photo: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
    },
    {
        _id: 3,
        name: "Стиральная машина",
        category: categories.appliances,
        quantity: 13,
        price: 22500,
        photo: "https://images.unsplash.com/photo-1622473590925-e3616c0a41bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=392&q=80"
    },
    {
        _id: 4,
        name: "Утюг",
        category: categories.appliances,
        quantity: 175,
        price: 5700,
        photo: "https://images.unsplash.com/photo-1574269910231-bc508bcb68ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
    },
    {
        _id: 5,
        name: "Фен",
        category: categories.appliances,
        quantity: 344,
        price: 2600,
        photo: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80"
    },
    {
        _id: 6,
        name: "Обогреватель",
        category: categories.appliances,
        quantity: 66,
        price: 13960,
        photo: "https://images.unsplash.com/photo-1632928274371-878938e4d825?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
    },
    {
        _id: 7,
        name: "Вентилятор",
        category: categories.appliances,
        quantity: 254,
        price: 3500,
        photo: "https://images.unsplash.com/photo-1564510182791-29645da7fac4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    },
    {
        _id: 8,
        name: "Кофемашина",
        category: categories.appliances,
        quantity: 38,
        price: 9900,
        photo: "https://images.unsplash.com/photo-1565452344518-47faca79dc69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80"
    },
    {
        _id: 9,
        name: "Стол",
        category: categories.furniture,
        quantity: 27,
        price: 15800,
        photo: "https://images.unsplash.com/photo-1576561647788-b011fe2a2b33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    }
];

if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(products));
}

const fetchAll = () => {
    return products;
};
/* const update = (id, data) =>
    new Promise((resolve) => {
        const users = JSON.parse(localStorage.getItem("products"));
        const userIndex = users.findIndex((u) => u._id === id);
        users[userIndex] = { ...users[userIndex], ...data };
        localStorage.setItem("products", JSON.stringify(users));
        resolve(users[userIndex]);
    }); */

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("products")).find(
                    (product) => product._id === id
                )
            );
        }, 1000);
    });
export default {
    fetchAll,
    getById
};
