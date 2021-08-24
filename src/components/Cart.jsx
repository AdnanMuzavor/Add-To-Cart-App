import React from "react";
import CartItem from "./CartItem";
import { Scrollbars } from 'react-custom-scrollbars';
import { useState } from "react";
import Total from "./Total";
import Items from "./Itemlist";
import {createContext} from "react";
import ContextCart from "./ContextCartContent";
import {useReducer} from "react";
import {reducer} from "./Reducerfn";
import {useEffect} from "react";

export const CartContext=createContext();
const initialState={
  item:Items,
  totalAmount:0,
  totalItem:0,
}

function Cart() {
  const[state,dispatch]=useReducer(reducer,initialState);


  const removeall=()=>{

    return dispatch({type:"DeleteAll",});
  }

  const deleteitem=(id)=>{
  
    return dispatch({
      type:"Deleteitem",
      payload:id
    });
  };
const plus=(id)=>{
  return dispatch({
    type:"INCREMENT",
    payload:id,
  })
}
const minus=(id)=>{
  return dispatch({
    type:"DECREMENT",
    payload:id,
  })
}

useEffect(()=>{
  dispatch(
    {
      type:"UPDATETOTAL",
    }
  )
},[state.item]);
  return (
    <>
    <CartContext.Provider value={{...state,removeall,deleteitem,plus,minus}}>
           <ContextCart/>  
   </CartContext.Provider>
    </>
  );
}

export default Cart;
