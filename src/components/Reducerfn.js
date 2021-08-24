export const reducer = (state, action) => {
  if (action.type === "DeleteAll") {
    return { ...state, item: [] };
  }
  if (action.type === "Deleteitem") {
    const newitem = state.item.filter((curelement) => {
      return curelement.id !== action.payload;
    });
    return { ...state, item: newitem };
  }
 if(action.type==="INCREMENT"){
     let updateditemlist=state.item.map((curelement)=>{
         if(curelement.id===action.payload){
             return {...curelement,qty:curelement.qty+1};
         }
         return curelement;
     })
     return {...state,item:updateditemlist}
 }
 if(action.type==="DECREMENT"){
    let updateditemlist=state.item.map((curelement)=>{
        if(curelement.id===action.payload){
            if(curelement.qty>=0){
            return {...curelement,qty:curelement.qty-1};}
          
          
        }
        return curelement;
    }).filter((ele)=>{return ele.qty!==0;})
    return {...state,item:updateditemlist}
}

if(action.type==="UPDATETOTAL"){
  let {totalItem, totalAmount}=state.item.reduce((accum,curele)=>{
    let {qty}=curele;
    let {price}=curele;
    accum.totalItem+=qty;
    accum.totalAmount+=qty*price;
    return accum;
  },{totalItem:0,totalAmount:0})
  return{...state,totalItem,totalAmount};
}
};
