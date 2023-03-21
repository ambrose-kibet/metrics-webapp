import PropTypes from 'prop-types';
import { BiRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const SingleCurrency = ({
  symbolImg, name, rate, id,
}) => (
  <Link to={`/${id.toLowerCase()}`} className="crypto-card">
    <div className="crypto-img-container">
      <img src={symbolImg} alt={name} className="crpto-img" />
    </div>
    <div className=" crpto-body">
      <h2 className="crypto-name">{name}</h2>
      <h4 className="crypto-rate">{rate}</h4>
    </div>
    <button className="arrow-left" type="button">
      <BiRightArrowCircle />
    </button>
  </Link>
);
SingleCurrency.propTypes = {
  symbolImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default SingleCurrency;
