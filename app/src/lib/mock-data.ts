import { Question } from '@/types/questions';

export const mockQuestions: Question[] = [
  {
    id: 1,
    question: 'Sales ledger control account contains the total amount in respect of',
    options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
    answer: 'Answer 1',
    subject: 'Accounting',
  },
  {
    id: 2,
    question: 'Which of the following is a real gas?',
    options: ['Oxygen', 'Nitrogen', 'Hydrogen', 'All of the above'],
    answer: 'All of the above',
    subject: 'Physics',
  },
  {
    id: 3,
    question: 'Who wrote the play "The Lion and the Jewel"?',
    options: ['Chinua Achebe', 'Wole Soyinka', 'Ben Okri', 'Chimamanda Ngozi Adichie'],
    answer: 'Wole Soyinka',
    subject: 'English',
  },
  {
    id: 4,
    question: 'Which of the following is NOT a part of the digestive system?',
    options: ['Stomach', 'Lungs', 'Small Intestine', 'Large Intestine'],
    answer: 'Lungs',
    subject: 'Biology',
  },
];