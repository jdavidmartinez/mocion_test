import { Fragment, useContext } from "react";

import { DataContext } from "../Questions/Questions";
import Card from "../../components/UI/Card/Card";

const Results = () => {
  const value = useContext(DataContext);
  const { data, answerArray } = value;
  const finalData = data;

  console.log(answerArray);

  for (let i = 0; i <= 9; i++) {
    finalData.results[i].answer = answerArray[i];
  }
  console.log(finalData);

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

        result.correct_answer === "True" && result.answer === 1
          ? (check = "+")
          : (check = "-");

        return (
          <Fragment>
            <h1>
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
