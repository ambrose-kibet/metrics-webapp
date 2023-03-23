import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <section className="section-container">
    <h2>Error 404 page not found </h2>
    <Link to="/"> Back home</Link>
  </section>
);
export default ErrorPage;
