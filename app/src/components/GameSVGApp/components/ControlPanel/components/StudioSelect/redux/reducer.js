export default (state = {}, {type, payload}) => {
  switch (type) {
    case "SET_CURRENT_PANEL" :
      return {
        ...state,
        currentPanel: payload.currentPanel
      };
    default :
      return state;
  }
}
