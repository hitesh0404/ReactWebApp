import { useNavigate } from "react-router-dom";

function ProductList({products,msg}) {
  const navigate = useNavigate();
  return (
    <>
      <div>ProductList</div>
      <div>{msg}</div>
      <div className="row">
      {products.map((product, index) => {
        return (
            <div key={index} className="col-4">
              <div className="card text-start">
                <img
                  className="card-img-top"
                  src={product.images[0]}
                  alt={product.title}
                />
                <div className="card-body">
                  <h4 className="card-title">
                    {product.title.length > 20
                      ? product.title.slice(0, 20) + "..."
                      : product.title}
                  </h4>
                  <p className="card-text">
                    {product.description.slice(0, 30) + "..."}
                  </p>
                  <div className="d-grid gap-2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => navigate(`/product-details/${product.id}`)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
        );
      })}
      </div>
    </>
  );
}

export default ProductList