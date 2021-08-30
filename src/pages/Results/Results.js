import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button.js/Button";
import { DataContext } from "../Questions/Questions";
import Card from "../../components/UI/Card/Card";
import classes from "./Results.module.css";

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
    <>
       <div className={classes.container}>
        <Card>
          <h1>Your scored</h1>
          <h1>{`${score()}/10`}</h1>
          {data.results.map((result) => {
            let check = "";

            result.correct_answer === "True" && result.answer === 1
              ? (check = "+")
              : (check = "-");

            return (
              <Fragment>
                <h3>
                  {check}
                  {result.question}
                </h3>
               
              </Fragment>
            );
          })}
        </Card>
      </div>
      <Link to="/">
            <Button>Home</Button>
          </Link>
    </>
  );
};

export default Results;
