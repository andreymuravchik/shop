export const addGoodstoCart = (goodsObj) => ({
  type: 'ADD_GOODS_CART',
  payload: goodsObj
})
export const clearCart = () => ({
  type: 'CLEAR_CART',
})
export const removeCartGoods = (id) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id
})
export const plusCartItem = (id) => ({
  type: 'PLUS_CART_ITEM',
  payload: id
})
export const minusCartItem = (id) => ({
  type: 'MINUS_CART_ITEM',
  payload: id
})