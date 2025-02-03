// Определяем интерфейс для вопроса и ответа с добавлением isLearned
interface CardData {
    id: number; // Уникальный идентификатор
    question: string;
    answer: string;
    isLearned: boolean; // Булевское значение для отслеживания статуса изучения
  }
  
  // Создаем массив карточных данных
  const cardData: CardData[] = [
    {
      id: 1,
      question: 'Какой язык программирования используется для веб-разработки?',
      answer: 'JavaScript',
      isLearned: false,
    },
    {
      id: 2,
      question: 'Что такое React?',
      answer: 'React — это библиотека JavaScript для построения пользовательских интерфейсов.',
      isLearned: false,
    },
    {
      id: 3,
      question: 'Что такое TypeScript?',
      answer: 'TypeScript — это строго типизированный язык программирования, который является суперсетом JavaScript.',
      isLearned: false,
    },
  ];
  
  export default cardData;