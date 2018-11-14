export default (state = {}, { type, payload }) => {
  switch (type) {
    case "SET_BACKGROUND_COLOR":
      return {
        ...state,
        backgroundColor: payload.color,
        fromColor: "transparent",
        toColor: "transparent"
      };

    default:
      return state;
  }
}
