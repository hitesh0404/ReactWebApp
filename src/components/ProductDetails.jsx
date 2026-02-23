import { useParams } from 'react-router-dom'

function ProductDetails() {
    const params = useParams();
  return (
    <div>ProductDetails {params.id}</div>
  )
}

export default ProductDetails