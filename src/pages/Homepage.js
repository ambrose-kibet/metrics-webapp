import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeroComponent from '../components/HeroComponent';

import { getCrypto } from '../redux/currencies/currenciesSlIce';
import SingleCurrency from '../components/SIngleCurrency';

const Homepage = () => {
  const { curencies } = useSelector((state) => state.currencies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCrypto());
  }, [dispatch]);

  return (
    <section className="section-container">
      <HeroComponent info="common" />
      <div className="home-intros">
        <div className="crypto-img-container " />
        <article className="home-info">
          <h2> Crypto-Currencies </h2>
        </article>
      </div>
      <h3>Stats per rank</h3>
      <div className="home-container">
        {curencies.map(({
          name, rank, id, symbol,
        }) => (
          <SingleCurrency
            key={id}
            symbolImg={`https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`}
            name={name}
            rate={rank}
            id={id}
          />
        ))}
      </div>
    </section>
  );
};

export default Homepage;
