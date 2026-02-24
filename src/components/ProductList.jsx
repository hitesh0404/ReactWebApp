import { useNavigate } from "react-router-dom";

function ProductList({products}) {
  const navigate = useNavigate();
  return (
    <>
      <div>ProductList</div>
      <div className="row">
      {products.products.map((product, index) => {
        return (
          <>
            <div key={index} className="col-4">
              <div class="card text-start">
                <img
                  class="card-img-top"
                  src={product.images[0]}
                  alt={product.title}
                />
                <div class="card-body">
                  <h4 class="card-title">
                    {product.title.length > 20
                      ? product.title.slice(0, 20) + "..."
                      : product.title}
                  </h4>
                  <p class="card-text">
                    {product.description.slice(0, 30) + "..."}
                  </p>
                  <div className="d-grid gap-2">
                    <button type="button" className="btn btn-primary"
                    onClick={()=>navigate(`/product-details/${product.id}`)}
                    >
                      View Details
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
          </>
        );
      })}
      </div>
    </>
  );
}

export default ProductList