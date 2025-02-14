import { CardData } from '../data/cardData'; // Импортируем интерфейс CardData
import styles from '../components/CardList.module.css';

interface Props {
  cardData: CardData[];
}

const CardList: React.FC<Props> = ({ cardData }) => {
  return (
    <div className={styles['card-list']}>
      {cardData.map((item) => (
        <div key={item.id} className={styles['card-item']}>
          <h3>{item.question}</h3>
          <p dangerouslySetInnerHTML={{ __html: item.answer }} />
        </div>
      ))}
    </div>
  );
};

export default CardList;