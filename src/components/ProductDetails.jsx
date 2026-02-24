import { useState,useEffect } from 'react';
import { useParams,Outlet } from 'react-router-dom'

function ProductDetails() {
    const params = useParams();
    const [product,setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      async function getProduct() {
        let productsData = await fetch(`https://dummyjson.com/products/${params.id}`);
        setProduct(await productsData.json());
      }
        getProduct();
    
    }, []);
    useEffect(() => {
      if (product) {
        setIsLoading(false);
      }
    }, [product]);

  if (isLoading)
    return (
      <>
        <div>
          <div className="container-fluid">
                <button class="btn btn-primary" type="button" disabled>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
            <Outlet></Outlet>
          </div>
        </div>
      </>
    );
  return (
    <div>
      ProductDetails
      <div class="card-body">
        <img class="card-img-top" width={100+"%"} height={400} src={product.images[0]} alt={product.title} />
        <h4 class="card-title">
          { product.title}
        </h4>
        <p class="card-text">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails