export const setBackgroundColor = color => ({
  type: "SET_BACKGROUND_COLOR",
  payload: {
    color
  }
});
export const setBackgroundFrom = from => ({
  type: "SET_BACKGROUND_FROM",
  payload: {
    from
  }
});
export const setBackgroundTo = to => ({
  type: "SET_BACKGROUND_TO",
  payload: {
    to
  }
});
export const setRotate = deg => ({
  type: "SET_ROTATE",
  payload: {
    deg
  }
});
