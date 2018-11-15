import axios from "axios";

export const getQuestionsApi = () => axios.get("http://www.mocky.io/v2/5bed7aa03300000e2da296ba")
  .then(res => res.data)
  .catch(err =>  err);
