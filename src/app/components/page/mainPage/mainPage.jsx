import React, { useState, useEffect } from "react";
import api from "../../../api";
import categories from "../../../api/fake.api/categories.api";
import "bootstrap/dist/css/bootstrap.css";
import SearchBar from "../../ui/searchBar";
import { Grid, Button, Box } from "@mui/material";
import PaginationBar from "../../common/pagination";
import { paginate } from "../../utils/paginate";
import GroupList from "../../common/groupList";
import Table from "../../common/table";
import _ from "lodash";

const MainPage = () => {
    const [products] = useState(api.products.default.fetchAll()); // юз селектор сюда

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState();
    const [sortBy, setSortBy] = useState({ path: "price", order: "asc" });
    const pageSize = 3;

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, searchQuery]);

    const handleCategorySelect = (item) => {
        if (searchQuery !== "") setSearchQuery("");
        setSelectedCategory(item);
    };
    const handlePageChange = (pageIndex) => {
        console.log(pageIndex);
        setCurrentPage(pageIndex);
    };
    const handleSearchQuery = ({ target }) => {
        setSelectedCategory(undefined);
        setSearchQuery(target.value);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    function filterProducts(data) {
        const filteredProducts = searchQuery
            ? data.filter(
                  (product) =>
                      product.name
                          .toLowerCase()
                          .indexOf(searchQuery.toLowerCase()) !== -1
              )
            : selectedCategory
            ? data.filter((product) => {
                  console.log(product.category, selectedCategory._id);
                  return product.category._id === selectedCategory._id;
              })
            : data;
        return filteredProducts;
    }
    const filteredProducts = filterProducts(products);
    const count = filteredProducts.length;
    const sortedProducts = _.orderBy(
        filteredProducts,
        [sortBy.path],
        [sortBy.order]
    );
    const productsCrop = paginate(sortedProducts, currentPage, pageSize);
    const clearFilter = () => {
        setSelectedCategory();
    };

    return (
        <div className="mainPage">
            <SearchBar onChange={handleSearchQuery} value={searchQuery} />
            <Grid container spacing={2} mt="1">
                <Grid item xs={2}>
                    {categories && (
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <GroupList
                                items={categories}
                                selectedItem={selectedCategory}
                                onItemSelect={handleCategorySelect}
                            />
                            <Button
                                sx={{ mt: 0.5 }}
                                variant="contained"
                                color="secondary"
                                onClick={clearFilter}
                            >
                                Сбросить фильтр
                            </Button>
                        </Box>
                    )}
                </Grid>
                <Grid item xs={10}>
                    <Table
                        data={productsCrop}
                        onSort={handleSort}
                        selectedSort={sortBy}
                    />
                </Grid>
            </Grid>
            <Box display="flex" justifyContent="center" mt={4}>
                <PaginationBar
                    itemsCount={count}
                    pageSize={pageSize}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                />
            </Box>
        </div>
    );
};

export default MainPage;
