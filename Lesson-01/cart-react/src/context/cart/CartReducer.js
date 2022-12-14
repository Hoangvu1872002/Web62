


const reducer =(state, action)=>{
    const {type, payload} = action;
    let newCart;
    switch(type){

        case "ADD_TO_CART":


        const searchItem = state.cart.findIndex(
            (cartItem)=> cartItem.id === payload.id
        )

        if(searchItem){
            const newCartItem ={...payload, quantity : 1 }
            newCart =[...state.cart, newCartItem];
        }else{
            newCart =[...state.cart];
            newCart[searchItem].quantity+=1
        }

           
            return{
                ...state,
                cart:newCart
            }
        case 'PLUS_QUANTITY':
             newCart =state.cart.map((item) =>{
                if(item.id === payload){
                    return {
                        ...item,
                        quantity:item.quantity +1
                    }
                }else{
                    return {
                        ...item
                    }                }
            })
            return{
                ...state,
                cart:newCart
            }
            case 'MINUS_QUANTITY':
             newCart =state.cart.map((item) =>{
                if(item.id === payload){
                    return {
                        ...item,
                        quantity:item.quantity -1
                    }
                }else{
                    return {
                        ...item
                    }
                }
            })
            return{
                ...state,
                cart:newCart
            }
            case 'DELETE_CART_ITEM':
                newCart =state.cart.filter((item)=>item.id!== payload);
                return{
                    ...state,
                cart:newCart
                }
        default:
            return state;
    }
    
}

export default reducer;