import { fork } from "redux-saga/effects";
import {watchFetchQuestion} from "../src/components/FAQ/redux/sagas";

export default function* (){
  yield fork(watchFetchQuestion);
}
