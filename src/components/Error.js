import react from "React";
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../../index.css";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-container">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/024/265/336/small_2x/sad-cat-crying-expression-at-night-raining-day-created-using-generative-ai-technology-photo.jpg"
        alt="ERROR"
        className="error-image"
      />
      <h1>{err.status} : {err.statusText}</h1>
      <Link to="/" className="back-link">
        Go back to Home
      </Link>
    </div>
  );
};

export default Error;
