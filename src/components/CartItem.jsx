import {CardTravelTwoTone} from '@material-ui/icons';
import React,{useState} from 'react';
import {useContext} from 'react';
import { CartContext } from './Cart';

// onClick={()=>plus(id) }
// onClick={()=>minus(id)}
function CartItem({name,price,img,id,qty}){


const {deleteitem,plus,minus}=useContext(CartContext);
    return(
        <>
 <div className="col-6 col-md-12 col-lg-12 my-2 itmcont">
         <div className="row item d-flex flex-direction-column align-items-center">
         <div className=" text-center img mx-auto col-10 col-md-4 col-lg-4">
                   <img src={img} alt="" className="img-fluid " />
               </div>
               <div className=" text-center itemname mx-auto col-10 col-md-3 col-lg-2">
                   {name}
               </div>
               <div className=" text-center price mx-auto col-10 col-md-3 col-lg-2">
              {price}
               </div>
               <div className=" text-center  qty mx-auto col-6 col-md-3 col-lg-2">
            <div className="d-flex flex-direction-column ">
            
            <i class="fa fa-minus-square fa-2x mx-1" aria-hidden="true"  onClick={()=>minus(id)} ></i> 
               <span> {qty}</span>
               <i class="fa fa-plus-square fa-2x mx-1" aria-hidden="true" onClick={()=>plus(id) }></i>
               </div>
              
             
             </div>  
               <div className=" text-center totlqty mx-auto col-6 col-md-3 col-lg-2">
                 10000
               </div>


               <div className="row text-center my-2 mx-2 d-flex justify-content-center">
               <button className="btn col-10 col-lg-5 col-md-5 mx-2 " onClick={()=>{deleteitem(id)}}>   <i class="fa fa-trash" aria-hidden="true"></i></button>
            
           </div>

           </div>
        
         </div>
        </>
    )
}
 export default CartItem;