import useFetch from '../hooks/useFetch';
import { URL_STORE } from '../constants';
import { Figure } from '../components';

function Products() {

  const { data: products, error, isPending } = useFetch(`${URL_STORE}/products?limit=5&sort=desc`);

  return (
    <div>
      <h2>Products</h2>
      { error && <div>{ error }</div> }
      { isPending && <div>products loading...</div> }
      <div className="figure-container">
      { products && products.map((product) => (
        <Figure key={product.id} item={product}/>
      ))}
      </div>

    </div>
  )

}

export default Products;