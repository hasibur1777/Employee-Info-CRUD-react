import Header from './Header';
import AllData from './AllData';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Header />
      <div className="">
        <h1 className="text-center">Employee Info</h1>
        <hr />
        <Link
          className="btn btn-outline-success"
          to={`/employee/create`}
        >
          Add New
        </Link>
        <AllData />
      </div>
    </div>
  );
}

export default Home;
