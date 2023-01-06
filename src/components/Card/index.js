import styles from './Card.module.scss';

function Card(props) {
  const { img, name, price } = props;

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src="/img/heart-unliked.svg"
          alt="Unliked"
        />
      </div>
      <img
        width={133}
        height={112}
        src={`/img/sneakers/${img}.jpg`}
        alt=""
      />
      <h5 className="mb-15">{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button className="button">
          <img
            width={11}
            height={11}
            src="/img/plus.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
