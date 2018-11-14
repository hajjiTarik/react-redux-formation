import { createStore } from "redux";
import rootReducer from "./rootReducer/index";
import { compose } from "redux";

const store = createStore(rootReducer, {});
export default store;
