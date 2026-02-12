const initialState ={
    cart: [],
    totalPrice: 0,
    cartId: null,
}
export const cartReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "ADD_CART":
            const productToAdd = action.payload;
            const existingProduct =state.cart.find(
                (item) => item.productId === productToAdd.productId
            );
           
            if(existingProduct){
                const updatedCart = state.cart.map((item) => {
                   if(item.productId === productToAdd.productId){
                    return productToAdd;
                   }else{
                    return item;
                   }
                });

                return{
                    ...state,
                    cart:updatedCart,
                }
            }else{
                const newCart = [...state.cart, productToAdd];
                return{
                    ...state,
                    cart: newCart,
                };
            }
            case "REMOVE_FROM_CART":
                return {
                    ...state,
                    cart: action.payload,
                };
               

                case "GET_USER_CART_PRODUCTS":
                return {
                    ...state,
                    cart: action.payload,
                    totalPrice: action.totalPrice,
                    cartId: action.cartId,
                };

                case "CLEAR_CART":
                return {
                   cart:[], totalPrice:0, cartId:null
                };
    
        default:
            return state;
    }
    return state;
}

// const initialState = {
//   cart: [],
//   totalPrice: 0,
//   cartId: null,
// };

// export const cartReducer = (state = initialState, action) => {
//   switch (action.type) {

//     case "ADD_CART": {
//       const productToAdd = action.payload;

//       const existingProduct = state.cart.find(
//         (item) => item.productId === productToAdd.productId
//       );

//       let updatedCart;

//       if (existingProduct) {
//         updatedCart = state.cart.map((item) =>
//           item.productId === productToAdd.productId ? productToAdd : item
//         );
//       } else {
//         updatedCart = [...state.cart, productToAdd];
//       }

//       const totalPrice = updatedCart.reduce((acc, item) => {
//         return acc + Number(item.specialPrice) * Number(item.quantity);
//       }, 0);

//       return {
//         ...state,
//         cart: updatedCart,
//         totalPrice,
//       };
//     }

//     case "REMOVE_FROM_CART": {
//       const updatedCart = action.payload;

//       const totalPrice = updatedCart.reduce((acc, item) => {
//         return acc + Number(item.specialPrice) * Number(item.quantity);
//       }, 0);

//       return {
//         ...state,
//         cart: updatedCart,
//         totalPrice,
//       };
//     }

//     case "GET_USER_CART_PRODUCTS": {
//       const cartItems = action.payload ?? [];

//       const totalPrice = cartItems.reduce((acc, item) => {
//         return acc + Number(item.specialPrice) * Number(item.quantity);
//       }, 0);

//       return {
//         ...state,
//         cart: cartItems,
//         totalPrice,
//         cartId: action.cartId,
//       };
//     }

//     default:
//       return state;
//   }
// };
