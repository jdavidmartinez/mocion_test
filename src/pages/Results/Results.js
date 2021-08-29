import { Fragment, useContext } from "react";

import { DataContext } from "../Questions/Questions";
import Card from "../../components/UI/Card/Card";
import { array } from "prop-types";

const Results = () => {
  const value = useContext(DataContext);
  const { data, answerArray } = value;
  console.log(data, answerArray);

  const score = () => {
    const finalScore = answerArray.reduce((a, b) => a + b, 0);
    return finalScore;
  };
  return (
    <Card>
      <h2>Your scored</h2>
      <h1>{`${score()}/10`}</h1>
      {data.results.map((result) => {
        
        let check = "";
        //for(let i = 0; i=== answerArray.length; i++)
        let i = 0;
        result.correct_answer === "True" && answerArray[i] === 1
        ? (check = "+")
        : (check = "-")
        i++;
        return (
          <Fragment>
           
            <h1>
              {i}
              {check}
              {result.question}
            </h1>
          </Fragment>
        );
        
      })}
    </Card>
  );
};

export default Results;
