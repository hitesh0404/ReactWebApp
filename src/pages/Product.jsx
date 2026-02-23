import { Outlet } from 'react-router-dom'
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';

function Product() {
  return (
    <div>
      <div className="container row">
        <div className="col-3">
          <ProductFilter></ProductFilter>
        </div>
        <div className="col-9">
          <ProductList></ProductList>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default Product


