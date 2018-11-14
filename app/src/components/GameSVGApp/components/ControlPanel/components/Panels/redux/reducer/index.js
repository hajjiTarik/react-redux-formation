export default (state = {rotate : 0}, { type, payload }) => {
  switch (type) {
    case "SET_BACKGROUND_COLOR":
      return {
        ...state,
        backgroundColor: payload.color,
        fromColor: "transparent",
        toColor: "transparent"
      };

    case "SET_BACKGROUND_FROM":
      return {
        ...state,
        fromColor: payload.from
      };

    case "SET_BACKGROUND_TO":
      return {
        ...state,
        toColor: payload.to
      };

    case "SET_ROTATE":
      return {
        ...state,
        rotate: payload.deg
      };

    default:
      return state;
  }
}
