const QuestionListConst = [
  {
    questionId: 1,
    questionTitle: 'What is the capital of India?',
    options: [
      {
      questionId: 1,
        answerId: 1,
        isCorrectAnswer: false,
        answerTitle: 'Kolkata',
      },
      {
          questionId: 1,
        answerId: 2,
        isCorrectAnswer: false,
        answerTitle: 'Mumbai',
      },
      {
          questionId: 1,
        answerId: 3,
        isCorrectAnswer: false,
        answerTitle: 'Bengaluru',
      },
      {
          questionId: 1,
        answerId: 4,
        isCorrectAnswer: true,
        answerTitle: 'New Delhi',
      },
    ],
  },
  {
    questionId: 2,
    questionTitle: 'There are how many states in India',
    options: [
      {
          questionId: 2,
        answerId: 1,
        isCorrectAnswer: false,
        answerTitle: '50',
      },
      {
          questionId: 2,
        answerId: 2,
        isCorrectAnswer: false,
        answerTitle: '36',
      },
      {
          questionId: 2,
        answerId: 3,
        isCorrectAnswer: true,
        answerTitle: '29',
      },
      {
          questionId: 2,
        answerId: 4,
        isCorrectAnswer: false,
        answerTitle: '31',
      },
    ],
  },
  {
    questionId: 3,
    questionTitle: 'What is the population of India?',
    options: [
      {
          questionId: 3,
        answerId: 1,
        isCorrectAnswer: false,
        answerTitle: '10 Crore',
      },
      {
          questionId: 3,
        answerId: 2,
        isCorrectAnswer: false,
        answerTitle: '100 Crore',
      },
      {
          questionId: 3,
        answerId: 3,
        isCorrectAnswer: false,
        answerTitle: '50 Crore',
      },
      {
          questionId: 3,
        answerId: 4,
        isCorrectAnswer: true,
        answerTitle: '250 Crore',
      },
    ],
  },
  {
    questionId: 4,
    questionTitle: 'What is the nation sport of India?',
    options: [
      {
          questionId: 4,
        answerId: 1,
        isCorrectAnswer: false,
        answerTitle: 'Tennis',
      },
      {
          questionId: 4,
        answerId: 2,
        isCorrectAnswer: false,
        answerTitle: 'Cricket',
      },
      {
          questionId: 4,
        answerId: 3,
        isCorrectAnswer: false,
        answerTitle: 'Football',
      },
      {
          questionId: 4,
        answerId: 4,
        isCorrectAnswer: true,
        answerTitle: 'Hockey',
      },
    ],
  },
  {
    questionId: 5,
    questionTitle: 'How many minutes are in a full week?',
    options: [
      {
          questionId: 5,
        answerId: 1,
        isCorrectAnswer: true,
        answerTitle: '10800',
      },
      {
          questionId: 5,
        answerId: 2,
        isCorrectAnswer: false,
        answerTitle: '5020',
      },
      {
          questionId: 5,
        answerId: 3,
        isCorrectAnswer: false,
        answerTitle: '100000',
      },
      {
          questionId: 5,
        answerId: 4,
        isCorrectAnswer: false,
        answerTitle: '6500',
      },
    ],
  },
];
export const getQuestions = () => {
  return shuffleArray(QuestionListConst)
}

function shuffleArray(array:any) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array
}