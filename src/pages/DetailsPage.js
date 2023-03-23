import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { getSingleCrypto } from '../redux/currencies/currenciesSlIce';
import HeroComponent from '../components/HeroComponent';
import DetailsComponent from '../components/DetailsComponent';

const DetailsPage = () => {
  const { singleCrypto } = useSelector((state) => state.currencies);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleCrypto(id));
  }, [dispatch, id]);
  return (
    <section className="section-container">
      <HeroComponent info="single crypto info" />
      <div className="home-intros space">
        <div className="crypto-img-container">
          <img
            src={`https://coinicons-api.vercel.app/api/icon/${singleCrypto?.symbol}`}
            alt={singleCrypto?.name}
            className="crpto-img"
          />
        </div>
        <article className="home-info">
          <h2>
            {singleCrypto?.name}
            {' '}
          </h2>
          <h4>
            Rank:
            {singleCrypto?.rank}
          </h4>
        </article>
      </div>
      <h3> Crypto Breakdown</h3>
      <div className="style">
        <DetailsComponent title="symbol" item={singleCrypto?.symbol} />
        <DetailsComponent
          title="change Percent 24Hr"
          item={singleCrypto?.changePercent24Hr}
        />
        <DetailsComponent title="price Usd" item={singleCrypto?.priceUsd} />
        <DetailsComponent title="supply" item={singleCrypto?.supply} />
      </div>
    </section>
  );
};
export default DetailsPage;
