import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterItems,
  updateSearch,
  getCrypto,
} from '../redux/currencies/currenciesSlIce';

const HeroComponent = ({ info }) => {
  const dispatch = useDispatch();
  const { searchParams } = useSelector((state) => state.currencies);

  const search = useRef(null);

  useEffect(() => {
    if (!searchParams) {
      dispatch(getCrypto());
    }

    dispatch(filterItems(searchParams));
  }, [searchParams, dispatch]);

  useEffect(() => {
    search.current.focus();
  }, []);

  return (
    <div className="hero">
      <Link to="/" className="home-btn">
        <FaChevronLeft />
      </Link>
      <input
        className={info === 'common' ? 'input-text' : 'hide'}
        type="text"
        value={searchParams}
        ref={search}
        placeholder="search crypto ie. bitcoin"
        onChange={(e) => dispatch(updateSearch(e.target.value))}
      />
      <p className={info === 'common' ? 'hide' : 'hero-text'}>{info}</p>
    </div>
  );
};

HeroComponent.propTypes = {
  info: PropTypes.string.isRequired,
};
export default HeroComponent;
