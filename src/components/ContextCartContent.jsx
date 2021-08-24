import React,{useState} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import CartItem from './CartItem';
import { CartContext } from './Cart';
import {useContext} from 'react';
function ContextCart(){

   
    //Array of items is not being imported nor it is being passed as prop instead we created a context variable, pass imported array in it , amde a provider and imported that context here and directly set Sitems which will have value as as that array of items/shopping items.
    const {item,removeall,totalItem,totalAmount}=useContext(CartContext);
 
    return (
        <>

<div className="container cont">
        <div className="row rbg topcontainer mx-auto ">
          <div className="col-md-6 col-lg-6 col-6 cbg">
            <div className="arrow "><i class="fas fa-arrow-left fa-2x"></i></div>
          </div>
         
          <div className="col-md-6 col-lg-6 col-6 cbg  ">
          <div className="carticon ">
          <i className="fas fa-cart-arrow-down fa-2x "></i>
           <span className="total">{totalItem}</span> </div>
        
            
          </div>
        </div>
        <div className="row  my-2">

        <div className="mx-auto col-md-10 col-lg-10 col-10 cbg">
           <h4 className="text-center">Shopping Cart</h4>
          </div>

          <div className="col-md-10 col-lg-10 col-10 cbg mx-auto  ">
            <div className="navbar d-flex justify-content-center  ">
              no of items selected:  {totalItem}
            </div>
          </div>
        </div>
  
        <div className="itmcontainer my-3">
        <Scrollbars>
          <div className="row cartitems my-4">
           
           
            {item.map((element) => {
              return (
                <CartItem key={element.id} {...element}/>
            
               
              );
            })} 
          </div> 
       </Scrollbars>
        </div>
     
      </div>
      <div className="row">
        
          <div className="text-center  col-4 col-md-4 col-lg-4">
              <button className="btn">Checkout</button>
          </div>
          <div className="mx-auto col-4 col-md-4 col-lg-4">
              <h3 className="text-center">Total Amount: Rs{totalAmount}</h3>
          </div>
          <div className="text-center  col-4 col-md-4 col-lg-4">
              <button className="btn" onClick={()=>removeall()}>Delete Items</button>
          </div>
      </div>


        </>
    )}

    export default ContextCart;