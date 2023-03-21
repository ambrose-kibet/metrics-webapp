import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';

const HeroComponent = ({ info }) => (
  <div className="hero">
    <Link to="/" className="home-btn">
      <FaChevronLeft />
    </Link>
    <p className="hero-text">{info}</p>
  </div>
);

HeroComponent.propTypes = {
  info: PropTypes.string.isRequired,
};
export default HeroComponent;
