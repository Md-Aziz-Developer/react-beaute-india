const initialState = {
    totalQuantity : 0,
    subTotal : 0,
    total : 0,
    data : [],
};

const check = (array,obj) => {
    for (let i = 0; i < array.length; i++) {            
        if (array[i].id == obj) {
            return true;
        }
    }
    return false;
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const  cartItems = state.data;        
            
            if(check(cartItems,action.id)){
                for (let i = 0; i < cartItems.length; i++) {            
                    if (cartItems[i].id == action.id) {
                        cartItems[i].quantity = cartItems[i].quantity+1;
                    }
                }
            }else{
                cartItems.push({
                            id : action.id,
                            product_id : action.product_id,
                            name : action.name,
                            price : action.price,
                            quantity : action.quantity,
                            attributes : action.attributes,
                            model : action.model,
                        });
            }                     
            var items = {
                ...state,
                totalQuantity : state.totalQuantity + action.quantity,
                subTotal : Number(parseFloat(state.subTotal + action.price).toFixed(2)),
                total : Number(parseFloat(state.total + action.price).toFixed(2)),
                data : cartItems,                
            };
            return items;
        break;

        case 'UPDATE_CART': 
            const  cart_Items = state.data;
            if(check(cart_Items,action.id)){
                for (let i = 0; i < cart_Items.length; i++) {            
                    if (cart_Items[i].id == action.id) {
                        cart_Items[i].quantity = action.quantity;
                    }
                }
            }
            let getTotalQuantity = 0;
            for (let i = 0; i < cart_Items.length; i++) {        
                getTotalQuantity = getTotalQuantity + cart_Items[i].quantity
            } 
            var getSubTotal = 0;
            for (let i = 0; i < cart_Items.length; i++) {  
                getSubTotal = getSubTotal + (cart_Items[i].price*cart_Items[i].quantity)
            } 
            var getTotal = 0;
            for (let i = 0; i < cart_Items.length; i++) {   
                getTotal = getTotal + (cart_Items[i].price*cart_Items[i].quantity)
            }
            var items = {
                ...state,
                totalQuantity : getTotalQuantity,
                subTotal : getSubTotal ,
                total : getTotal,
                data : cart_Items,                
            };
            return items;
        break;

        case 'DELETE_FROM_CART':
            const cartItem = state.data.find((item) => item.id == action.id);
            const allItems = state.data.filter((item) => item.id !== action.id);
            const latestQty = state.totalQuantity - cartItem.quantity;
            var items = {
                ...state,
                totalQuantity : latestQty > 0 ? latestQty : 0,
                subTotal : Number(parseFloat(state.subTotal - (cartItem.price * cartItem.quantity)).toFixed(2)),
                total : Number(parseFloat(state.total - (cartItem.price * cartItem.quantity)).toFixed(2)),
                data : allItems,                
            };
            return items;
        break;
    
        default:
            return state;
        break;
    }
}

export default cart;