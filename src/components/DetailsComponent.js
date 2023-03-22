import PropTypes from 'prop-types';
import { BiRightArrowCircle } from 'react-icons/bi';

const DetailsComponent = ({ title, item }) => (
  <div className="details-container">
    <h3>{title}</h3>
    <div className="details-info">
      <h4>{item}</h4>
      <button className="arrow-left btn-arrow" type="button">
        <BiRightArrowCircle />
      </button>
    </div>
  </div>
);

DetailsComponent.propTypes = {
  title: PropTypes.string,
  item: PropTypes.string,
};
DetailsComponent.defaultProps = {
  title: 'title',
  item: '0',
};
export default DetailsComponent;
