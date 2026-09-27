import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found-page">
      <span className="not-found-code">404</span>
      <h1>PAGE NOT FOUND.</h1>
      <p>
        The page you are looking for does not exist or may have moved. Use the
        navigation below to continue exploring Habtech Construction.
      </p>
      <div className="not-found-actions">
        <Link to="/" className="not-found-primary">Back Home</Link>
        <Link to="/services" className="not-found-secondary">View Services</Link>
      </div>
    </main>
  );
}

export default NotFound;
