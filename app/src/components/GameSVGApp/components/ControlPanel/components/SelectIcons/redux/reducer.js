export default (state = {
  svg: {}
}, {type, payload}) => {
  switch (type) {
    case "SET_SELECTED_SVG" :
      return {
        ...state,
        svg: payload.svg
      }
    default :
      return state;
  }
}
