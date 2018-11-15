export default (state = {
  questions: [],
  loading: false
}, {type, payload}) => {
  switch (type) {
    case "FETCH_QUESTIONS_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "FETCH_QUESTIONS_SUCCESS":
      return {
        ...state,
        questions: payload.questions,
        loading:false
      };
    case "FETCH_QUESTIONS_FAILED":
      return {
        ...state,
        error: payload.error,
        loading:false
      };
    default :
      return state
  }
}
