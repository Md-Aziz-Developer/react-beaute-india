import { combineReducers } from "redux";
import { AuthSlices } from "store/auth/slices";
import { CartSlices } from "store/cart/slices";
import { CommonSlices } from "store/common/slices";
import { ShopSlices } from "store/shop/slices";

const rootReducer = combineReducers({
    auth: AuthSlices.reducer,
    common: CommonSlices.reducer,
    cart: CartSlices.reducer,
    shop: ShopSlices.reducer,
});

export default rootReducer;