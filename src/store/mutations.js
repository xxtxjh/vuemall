import { ADDCOUNT, ADDTOCART, ADDCOUNTS, DESCOUNTS } from './mutations-types'
export default {
    [ADDCOUNT](state, payload) {
        payload.count++;
    },
    [ADDTOCART](state, payload) {
        payload.checked = false;
        state.cartList.push(payload);
    },
    [ADDCOUNTS](state, payload) {
        payload.cartList.count++;
    },
    [DESCOUNTS](state, payload) {
        if (payload.cartList.count > 1) {
            payload.cartList.count--;
        }
    },
}