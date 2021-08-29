import React, { useState } from "react";
import useAxios from "axios-hooks";

import classes from "./Questions.module.css";
import Button from "../../components/UI/Button.js/Button";
import Card from "../../components/UI/Card/Card";
import Results from "../Results/Results";

export const DataContext = React.createContext();

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
      <>
        <div className="question-container">
          <Card>
            <div>
              <h1>{data.results[questionNumber].category}</h1>
            </div>
            <Card className={classes.question}>
              <h3>{data.results[questionNumber].question}</h3>
            </Card>
            <div>
              <h4>{`${questionNumber + 1} of 10`}</h4>
            </div>
            <div>
              <Button onClick={() => validationAnswer("True")}>True</Button>
              <Button onClick={() => validationAnswer("False")}>False</Button>
            </div>
          </Card>
        </div>
      </>
    );
  } else {
    return (
      <DataContext.Provider value={{ data, answerArray }}>
        <Results />
      </DataContext.Provider>
    );
  }
};

export default Questions;