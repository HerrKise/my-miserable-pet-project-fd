import React from "react";
// import { useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
// import EditUserPage from "../components/page/editUserPage"; - страницу для редактирования товара прицепить
import EditProductPage from "../components/page/editProductPage";
import ProductPage from "../components/page/productPage";
import MainPage from "../components/page/mainPage";
// import UsersLoader from "../components/ui/hoc/usersLoader"; - лоадер для товаров прицепить

// import { getCurrentUserId } from "../store/users";
const Main = () => {
    const params = useParams();
    const { productId, edit } = params;
    // const currentUserId = useSelector(getCurrentUserId());
    const isAdmin = true; // потом добавить юзселектор, чтобы давать редактирование для админов

    // обернуть всё в ProductsLoader в ретерне!

    return (
        <>
            {productId ? (
                edit ? (
                    isAdmin ? (
                        <EditProductPage />
                    ) : (
                        <Redirect to={`/products/${productId}`} />
                    )
                ) : (
                    <ProductPage productId={productId} />
                )
            ) : (
                <MainPage />
            )}
        </>
    );
};

export default Main;
