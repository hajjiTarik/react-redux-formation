import { combineReducers } from "redux";
import reducerApp from "../../src/components/GameSVGApp/redux/reducer";

export default combineReducers({
  app: reducerApp
})
