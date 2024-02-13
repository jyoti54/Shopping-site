import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';
// import Select from 'react-dropdown-select';

function Cart() {

  // const[values, setValues] = useState(0);

  const dispatch = useDispatch();
  const product = useSelector(state => state.cart);

  const removeToCart = (id) => {
    dispatch(remove(id));
  }

  // const setval=(event)=>{
  //   setValues(event.target.value);
  // }
  // const val = [1,2,3,4,5]

  // const options = [
  //   { 
  //     value: 1,
  //     label: "Leanne Graham"
  //   },
  //   {
  //     value:  2,
  //     label: "Ervin Howell"
  //   }
  // ];

  const cartDiv = product.map((item) =>
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', listStyle: 'none', background: 'yellow' }}>

      <li key={item.id}>

        <div className="card" style={{ width: 400, height: 600, marginBottom: 10, marginRight: 30, marginLeft: 60, marginTop: 60 }}>
          <img src={item.image} className="card-img-top" style={{ width: 300, height: 400, padding: 30 }} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">Rs. {item.price}</p>
          </div>

          <div className="card-body" style={{ paddingLeft: 50 }}>

          {/* <Select options={options} onChange={(values) => this.setValues(values)} /> */}

            <button type="button" class="btn btn-danger" onClick={() => removeToCart(item.id)}>Remove Item</button>
          </div>
        </div>

      </li>
    </div>
  )


  return (
    <>
      <h1>Cart details</h1>

      <div>
        {cartDiv}
      </div>
      {/* <Select 
        // options={val} 
        id="cartval"
        value={val}
        onChange={setval}
        >
          <MenuItem value='1'>one</MenuItem>
          <Menuitem value='2'>Two</Menuitem>
          </Select>  */}
      
    {/* <h1>values= {values}</h1> */}
    </>
  )
}

export default Cart