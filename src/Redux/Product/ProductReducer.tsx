import productTypes from '../Product/ProductTypes'
 
const INITIAL_STATE = {
  products: [],
  product: {},
  error:''
  };

const userReducer = (state=INITIAL_STATE, action:any) => {
    switch(action.type) {
      case productTypes.FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: action.payload,
        }
      case productTypes.ADD_NEW_PRODUCT_SUCCESS:
        return{
          ...state,
          product:action.payload,
          error: ''
        }
     case productTypes.DELETE_PRODUCT_FAILURE:
     case productTypes.FETCH_PRODUCTS_FAILURE:   
     case productTypes.ADD_NEW_PRODUCT_FAILURE:
       return{
           products:[],
           error: ''
       }   
      case productTypes.DELETE_PRODUCT_SUCCESS:
        return{
          ...state,
        }  
      default:
        return state;
    }
  };
  
  export default userReducer;