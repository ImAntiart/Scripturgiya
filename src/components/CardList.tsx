// src/components/CardList.tsx
import React from 'react';
import cardData from '../../src/data/cardData';
import styles from '../../src/components/CardList.module.css';




interface Props {
    cardData: typeof cardData;
  }
  
  const CardList: React.FC<Props> = ({ cardData }) => {
    return (
      <div className={styles['card-list']}>
        {cardData.map((item) => (
          <div key={item.id} className={styles['card-item']}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
            <span className={`${styles['learned-badge']} ${item.isLearned ? styles['learned'] : ''}`}>{item.isLearned ? 'Изучено' : 'Не изучено'}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default CardList;