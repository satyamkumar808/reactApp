import React, {  useEffect, useState } from "react";

const Product = (props) => {


    const[cartItemTotal, setCartItemTotal] = useState(0)
    const[quantity, setQuantity] = useState(1)

    const childCallBack =(e)=>{
        setQuantity(e.target.value)
        setCartItemTotal(e.target.value * props.product.price)
        console.log(cartItemTotal, "child")

    }

    useEffect(() => {
        props.callBack(cartItemTotal, props.product.modelNum,props.product.productId, quantity)
        setCartItemTotal(quantity*props.product.price)
    },[cartItemTotal])
    

  return (
    <div className="conatainer">
      <ul id="cart-item">
        <li className="row">
          <div className="col">{props.product.description}</div>
          <div className="col">
            <select value={quantity} onChange={childCallBack} className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
          </div>
          <div className="col"><b> X </b>{props.product.price}</div>
          <div className="col"><b> = </b>{cartItemTotal}</div>
        </li>
      </ul>
    </div>
  );
};

export default Product;
