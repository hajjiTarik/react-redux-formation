import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchQuestionsRequest} from "./redux/actions";

class Faq extends Component {
  componentDidMount() {
    this.props.fetchQuestionsRequest();
  }

  renderQuestions = () => this.props.questions.map((questionObj, index) =>
    <li key={index}>
      <div style={{marginBottom: "20px"}}><strong>Question :</strong>{questionObj.question}</div>
      <div style={{marginBottom: "50px"}}><strong>Reponse :</strong>{questionObj.reponse}</div>
    </li>);

  render() {
    return (
      <div>
        <h1>FAQ</h1>
        <ul>
          {this.renderQuestions()}
        </ul>
      </div>
    )
  }
}

const msp = (state) => ({
  questions: state.data.questions
});

const mdp = dispatch => ({
  fetchQuestionsRequest: () => {
    dispatch(fetchQuestionsRequest());
  }
});

export default connect(msp, mdp)(Faq);

