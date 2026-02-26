import { Outlet } from 'react-router-dom'
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';

import { useState,useEffect } from 'react';
function Product() {
  const [productList, setProductList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getProducts() {
      let productsData = await fetch("http://127.0.0.1:5500/data.json");
      setProductList(await productsData.json());
    }
      getProducts();
   
  }, []);
  useEffect(() => {
    if (productList) {
      setIsLoading(false);
      productList.products.forEach((product)=>{
       const uniqueCategories = [
        ...new Set(productList.products.map((product) => product.category)),
       ];

       setCategories(uniqueCategories);
      })
    }
  }, [productList]);

  if (isLoading)
    return (
      <>
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-3">
                <ProductFilter categories ={categories} ></ProductFilter>
              </div>
              <div className="col-9">
                <button className="btn btn-primary" type="button" disabled>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
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
            <ProductFilter categories={categories}></ProductFilter>
          </div>
          <div className="col-9">
            <ProductList products={productList} ></ProductList>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Product;

