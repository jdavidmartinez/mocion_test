import { useContext } from "react";

import { DataContext } from "./Questions";

const Results = () => {
const value = useContext(DataContext);
// const [resData, answerArray] = value;
    console.log(value.data, value.answerArray);
    return <h1>{value.data.results[0].question}</h1>
};

export default Results;
