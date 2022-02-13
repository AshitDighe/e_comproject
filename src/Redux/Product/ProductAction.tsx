import productTypes from '../Product/ProductTypes';
import {handleAddProduct,handleFetchProducts,handleDeleteProduct} from '../Product/ProductHelpers';
import { iProduct} from '../../Model/product';

export const addProduct = (product:iProduct) => async (dispatch:any,productData:any) => {
  console.log("Product data Action ",product)
    try {
    const timestamp = new Date();
    const configModal = {
      ...product,
      createdDate: timestamp
     };
    await handleAddProduct({...configModal});
      dispatch({
        type: productTypes.ADD_NEW_PRODUCT_SUCCESS,
        payload: productData
         });
      dispatch(fetchProducts())
    } catch (error) {
     dispatch({
        type:productTypes.ADD_NEW_PRODUCT_FAILURE,
        payload: error
      });
    }
  };
  export const fetchProducts=()=> async (dispatch:any)=>{
    try {
      const products = await handleFetchProducts();
      dispatch({
        type: productTypes.FETCH_PRODUCTS_SUCCESS,
        payload: products
      });
    } catch (error) {
      dispatch({
        type:productTypes.FETCH_PRODUCTS_FAILURE,
        payload: error
      });
    }
  }
  export const deleteProductStart=(payload:any)=> async (dispatch:any,productID:any,products:iProduct)=>{
    try {
      await handleDeleteProduct(payload);
      dispatch({
        type: productTypes.DELETE_PRODUCT_SUCCESS,
        payload: productID
      });
      dispatch(fetchProducts());
    } catch (error) {
      dispatch({
        type:productTypes.DELETE_PRODUCT_FAILURE,
        payload: error
      });
    }
  }