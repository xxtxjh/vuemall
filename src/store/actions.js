import { ADDCOUNT, ADDTOCART, ADDCOUNTS, DESCOUNTS, DELBTNCARTLIST } from './mutations-types'
export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      let shop = context.state.cartList.find(item => item.iid === payload.iid)
      if (shop) {
        context.commit(ADDCOUNT, shop);
        resolve('商品添加成功 !');
      } else {
        payload.count = 1;
        context.commit(ADDTOCART, payload);
        resolve('商品添加成功 !');
      }
    })
  
  },
  addCartListCount(context, payload) {
    context.commit(ADDCOUNTS, payload);
  },
  desCartListCount(context, payload) {
    context.commit(DESCOUNTS, payload);
  },
  delBtnCartList(context, payload) {
    context.commit(DELBTNCARTLIST, payload);
  }
}