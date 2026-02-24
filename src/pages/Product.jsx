import { Outlet } from 'react-router-dom'
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';

import { useState,useEffect } from 'react';
function Product() {
  const [productList, setProductList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getProducts() {
      let productsData = await fetch("http://127.0.0.1:5500/data.json");
      setProductList(await productsData.json());
    }
    setTimeout(() => {
      getProducts();
    }, 3000);
  }, []);
  useEffect(() => {
    if (productList) {
      setIsLoading(false);
    }
  }, [productList]);

  if (isLoading)
    return (
      <>
        <div>
          <div className="container row">
            <div className="col-3">
              <ProductFilter></ProductFilter>
            </div>
            <div className="col-9">
              <button class="btn btn-primary" type="button" disabled>
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </button>
            </div>
          </div>
          <Outlet></Outlet>
        </div>
      </>
    );
  return (
    <div>
      <div className="container row">
        <div className="col-3">
          <ProductFilter></ProductFilter>
        </div>
        <div className="col-9">
          <ProductList products = {productList} ></ProductList>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default Product;

