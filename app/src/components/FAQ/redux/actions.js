export const fetchQuestionsRequest = () => ({
  type: "FETCH_QUESTIONS_REQUEST",
});


export const fetchQuestionsSucces = questions => ({
  type: "FETCH_QUESTIONS_SUCCESS",
  payload: {
    questions
  }
});

export const fetchQuestionsFailed = error => ({
  type: "FETCH_QUESTIONS_FAILED",
  payload: {
    error
  }
});
