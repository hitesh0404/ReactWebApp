import { Outlet } from 'react-router-dom'
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import { useState,useEffect } from 'react';

function Product() {
  const [filters, setFilters] = useState({
    categories: [],
    selectedCategories: [],
    minRating: 0,
    maxRating: 5,
    search: "",
  });
  const [productList, setProductList]  =  useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  useEffect(() => {
    async function getProducts() {
      let productsData = await fetch("https://dummyjson.com/products/");
      let data = await productsData.json();
      const uniqueCategories = [
        ...new Set(data.products.map((product) => product.category)),
      ];
      setProductList(data.products);
      setFilteredProducts(data.products);
      setFilters({  ...filters,categories: uniqueCategories, });
    }
    
    getProducts();
  }, []);
  useEffect(() => {
    if (!productList) return;
   
    if (filters.selectedCategories.length === 0) {
      setFilteredProducts(
        productList.filter((product) => {
          return product.rating > filters.minRating;
        }),
      );
       }
      else{
        setFilteredProducts(
          productList.filter((product) => {
            return (
              filters.selectedCategories.includes(product.category) &&
              product.rating > filters.minRating
            );
          }),
        ); 
      
    }
  }, [filters, productList]);
  if (!productList)
    return (
      <>
        <div>
          <div className = "container-fluid">
            <div className = "row">
              <div className = "col-3">
                <ProductFilter filters  =  {filters} setFilters = {setFilters}  ></ProductFilter>
              </div>
              <div className  =  "col-9">
                <button className = "btn btn-primary" type = "button" disabled>
                  <span
                    className = "spinner-border spinner-border-sm"
                    role = "status"
                    aria-hidden = "true"
                  ></span>
                  Loading...
                </button>
              </div>
            </div>
            <Outlet></Outlet>
          </div>
        </div>
      </>
    );
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <ProductFilter
              filters={filters}
              setFilters={setFilters}
      
            ></ProductFilter>
          </div>
          <div className="col-9">
            <ProductList products={filteredProducts}></ProductList>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Product;

