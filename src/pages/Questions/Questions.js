// Import libraries
import React, { useState } from "react";
import useAxios from "axios-hooks";

// Import Components
import Button from "../../components/UI/Button.js/Button";
import Card from "../../components/UI/Card/Card";
import classes from "./Questions.module.css";
import Results from "../Results/Results";

export const DataContext = React.createContext();

let currentQuestion = 0;

const Questions = () => {
  //Initial states
  const initialArray = [];
  const [questionNumber, setQuestionNumber] = useState(currentQuestion);
  const [answerArray, setAnswerArray] = useState(initialArray);

  // feche data via Axios 
  const [{ data, loading, error }] = useAxios(
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  //Validate user's answer vs data
  const validationAnswer = (res) => {
    if (res === data.results[questionNumber].correct_answer) {
      setAnswerArray([...initialArray, 1]);
      setQuestionNumber(currentQuestion++);
    } else {
      setAnswerArray([...answerArray, 0]);
      setQuestionNumber(currentQuestion++);
    }
  };

  if (questionNumber <= 9) {
    return (
      <>
        <div className={classes.container}>
          <Card>
            <div>
              <h1>{data.results[questionNumber].category}</h1>
            </div>
            <div className={classes.question}>
              <h3>{data.results[questionNumber].question}</h3>
            </div>
            <div>
              <h4>{`${questionNumber + 1} of 10`}</h4>
            </div>
            <div>
              <Button
                className={classes.true_button}
                onClick={() => validationAnswer("True")}
              >
                True
              </Button>
              <Button
                className={classes.false_button}
                onClick={() => validationAnswer("False")}
              >
                False
              </Button>
            </div>
          </Card>
        </div>
      </>
    );
  } else {
    return (
      <>
        <DataContext.Provider value={{ data, answerArray }}>
          <Results />
        </DataContext.Provider>
      </>
    );
  }
};

export default Questions;
