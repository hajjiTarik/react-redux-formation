import {combineReducers} from "redux";
import transformationReducer from "../src/components/GameSVGApp/components/ControlPanel/components/Panels/redux/reducer/index";
import svgReducer
  from "../src/components/GameSVGApp/components/ControlPanel/components/SelectIcons/redux/reducer";
import panelReducer
  from "../src/components/GameSVGApp/components/ControlPanel/components/StudioSelect/redux/reducer";

export default combineReducers({
  app: combineReducers({
    transformationReducer,
    svgReducer,
    panelReducer
  })
});
