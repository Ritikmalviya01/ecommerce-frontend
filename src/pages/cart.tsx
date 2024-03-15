import { useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItems from "../components/cart-items";
import { Link } from "react-router-dom";

const cartItems = [

{
  productId:"sjhjs",
  photo:"https://m.media-amazon.com/images/I/81njZjDqc6L._AC_UY327_FMwebp_QL65_.jpg",
  name:"sansung galaxy S 23 ultra",
  price:4545,
  quantity:2,
  stock:322,
  
  


},

];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;
 
const Cart = () => {

const [couponCode,setCouponcode]= useState<string>("");
const [isValidCouponCode,seIsValidCouponcode]= useState<boolean>(false);

  return (
    <div className="cart">
      <main>
        {
        cartItems.length > 0 ? (
          cartItems.map((i, idx)=> ( <CartItems key={idx} cartItem={i}/>))
        ) : (
          <h1>No Items Added</h1>
        )
}
      </main>
      <aside>
       <p>Subtotal: rs{subtotal}</p>
       <p>Shipping Charges: rs{shippingCharges}</p>     
       <p>Tax: rs{tax}</p>
       <p>Discount: <em> - rs{discount}</em> </p>
       <p>
        <b> Total: rs{total} </b></p> 
        
        <input type="text" 
        placeholder="Coupon Code"
        value={couponCode} onChange={(e) => setCouponcode(e.target.value)} />


     {couponCode && 
        (isValidCouponCode? (
           <span className="green">
            {discount} off using the
             <code>{couponCode}</code>
            </span>):
       (
         <span className="red">Invalid Coupon <VscError /> </span>
       ))}
       {
        cartItems.length > 0 && <Link to="/shipping">checkout</Link>
       }
       







      </aside>
    </div>
  )
}

export default Cart