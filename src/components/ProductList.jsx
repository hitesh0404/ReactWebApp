
function ProductList({products}) {
  return (
    <>
      <div>ProductList</div>
      {products.products.map((p, index) => {
        return <>
  
          <p key={index}>
            {p.id}
            {p.title}
          </p>
        </>
      })}
    </>
  );
}

export default ProductList