import { useState } from "react";
import useAxios from "axios-hooks";
import { Link } from "react-router-dom";
import Results from "./Results";

let currentQuestion = 0;
const Questions = () => {
  const [questionNumber, setQuestionNumber] = useState(currentQuestion);
  const [answerArray, setAnswerArray] = useState([]);
  const [{ data, loading, error }] = useAxios(
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const validationAnswer = (res) => {
    console.log(res);
    console.log(data.results[questionNumber].correct_answer);
    if (res === data.results[questionNumber].correct_answer) {
      console.log("Correcto");
      setAnswerArray([...answerArray, 1]);
      console.log(answerArray);
      setQuestionNumber(currentQuestion++);
      console.log(currentQuestion);
    } else {
      console.log("Incorrecto");
      setAnswerArray([...answerArray, 0]);
      console.log(answerArray);
      setQuestionNumber(currentQuestion++);
      console.log(currentQuestion);
    }
  };
  if (questionNumber <= 9) {
    return (
      <div>
        <div>
          <h1>{data.results[questionNumber].category}</h1>
          <h1>{questionNumber + 1}</h1>
        </div>
        <div>
          <h3>{data.results[questionNumber].question}</h3>
        </div>
        <button onClick={() => validationAnswer("True")}>True</button>
        <button onClick={() => validationAnswer("False")}>False</button>
      </div>
    );
  } else {
    return (
      
        <Results data={data} />
     
    );
  }
};

export default Questions;
