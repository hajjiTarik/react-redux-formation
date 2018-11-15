import { takeEvery, put, call} from "redux-saga/effects";
import { getQuestionsApi } from "./getQuestionsApi";
import { fetchQuestionsSucces, fetchQuestionsFailed } from "./actions";

function* fetchQuestionSaga() {
  try {
    const questions = yield call(getQuestionsApi);

    if (questions.length) {
      yield put(fetchQuestionsSucces(questions));
    }
  } catch (e) {
    yield put(fetchQuestionsFailed(e));
  }
}

export function* watchFetchQuestion() {
  yield takeEvery("FETCH_QUESTIONS_REQUEST", fetchQuestionSaga);
}
