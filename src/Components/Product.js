import React, { useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
 
function Product() {
  const dispatch = useDispatch();
  // const { data: product,status } = useSelector((state) => state.products)
  const { data: product } = useSelector((state) => state.products)
  // const [product, setProduct] = useState([]);

  useEffect(() => {

    dispatch(getProducts());
    // axios.get('https://fakestoreapi.com/products')
    //   .then((res) => setProduct(res.data))

  })

  // if(status === 'loading'){
  //   return<p>Loading...</p>
  // }

  // if(status === 'error'){
  //   return<p>Something went wrong! try again</p>
  // }

 

  const addToCart = (product) => {
    dispatch(add(product))
  }
  console.log("products: ", product)
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', listStyle: 'none', background: 'yellow' }}>


      {
        product.map((item) =>(
          <li key={item.id}>

            <div className="card" style={{ width: 400, height: 600, marginBottom: 10, marginRight: 30, marginLeft: 60, marginTop: 60 }}>
              <img src={item.image} className="card-img-top" style={{ width: 300, height: 400, padding: 30 }} alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Rs. {item.price}</p>
              </div>

              <div className="card-body" style={{ paddingLeft: 50 }}>
                {/* <Link to={`/product/${item.id}`} className="card-link">More Details</Link> */}
                {/* <Link to="/cart" className="card-link">Add to Cart</Link> */}
                <Link to={`/product/${item.id}`} className="btn btn-success" role='button' aria-pressed="true">More Details</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <Link to="/cart" class="btn btn-primary " role="button" aria-pressed="true" onClick={()=>addToCart(item)}>Add to cart</Link> */}
                {/* <Button class="btn btn-primary " aria-pressed="true" onClick={()=>addToCart(item)}>Add to cart</Button> */}
                <button type="button" class="btn btn-warning" onClick={() => addToCart(item)}>Add to cart</button>
              </div>
            </div>

          </li>
        )
        )
      }
    </div>

  )
}

export default Product