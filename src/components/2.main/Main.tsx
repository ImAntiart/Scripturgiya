import cardData from '../../data/cardData'; // Путь до файла с данными
import CardList from '../CardList'; // Путь до компонента CardList
import styles from './main.module.css';

export default function Main() {
  return (
    <main className={styles.main}>
      <p>Базовый контекст</p>
      <CardList cardData={cardData} />
    </main>
  );
}