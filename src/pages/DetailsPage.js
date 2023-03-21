import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getSingleCrypto } from '../redux/currencies/currenciesSlIce';
import HeroComponent from '../components/HeroComponent';

const DetailsPage = () => {
  const { singleCrypto } = useSelector((state) => state.currencies);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleCrypto(id));
  }, [dispatch, id]);
  console.log(singleCrypto);
  return (
    <section className="section-container">
      <HeroComponent info="single crypto info" />
      <div className="home-intros space">
        <div className="crypto-img-container">
          <img
            src={`https://coinicons-api.vercel.app/api/icon/${singleCrypto?.symbol.toLowerCase()}`}
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
    </section>
  );
};
export default DetailsPage;
