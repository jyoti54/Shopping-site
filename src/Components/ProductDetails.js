import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

function ProductDetails() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  const { id } = useParams()

  const addToCart=(product)=>{
    dispatch(add(product))
  }

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        const d = res.data.find((item) => item.id === parseInt(id))
        setProduct(d)
      }
      )
  })

  return (
    <>
      <div className="card "
        style={{width: 1100, height: 450, display:'flex',flexDirection:'row',flexWrap:'wrap',listStyle:'none',background:'yellow', marginLeft: 170, marginTop: 90,padding:20}} 
      >
        
        <div>
          <img src={product.image} className="card-img-top" style={{ width: 300, height: 400, padding: 30 }} alt="..." />
        </div>

        <div className="card-body " style={{ width: 300, height: 400, padding: 30 }}>
          <p className="card-text"> Rs. {product.title}</p>
          <h5 className="card-title ">Rs. {product.price}</h5>
          <p className="card-text " > {product.category}</p>
          <h5>{product.description}</h5> <br/> 
          {/* <Link to="/cart" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Add to cart</Link>         */}
          <button type="button" class="btn btn-warning" onClick={()=>addToCart(product)}>Add to cart</button>
        </div>      
        
      </div>
      
    </>
  )
}

export default ProductDetails