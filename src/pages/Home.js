import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <div >
        <h1>Welcome to the</h1>
        <Link to="/Questions">
        <button>Begin</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
