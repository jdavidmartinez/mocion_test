import { Link } from "react-router-dom";

import Button from "../../components/UI/Button.js/Button";
import Card from "../../components/UI/Card/Card";
import Container from "../../components/UI/Container/Container";
import classes from './Home.module.css';

const Home = () => {
  return (
    <>
    <div className={classes.container}>
      <Card>
        <div className={classes.container}>
          <h1>Welcome to the</h1>
          <h1>Trivia Challenge!</h1>
        
          <h3>You Will be presented</h3>
          <h3>With 10 True or False</h3>
          <h3>questions.</h3>
        </div>
        <div>
          <h1>Can you score 100%?</h1>
        </div>
        <Link to="/Questions">
          <Button>Begin</Button>
        </Link>
      </Card>
      </div>
    </>
  );
};

export default Home;
