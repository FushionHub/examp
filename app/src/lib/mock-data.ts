import { Question } from '@/types/questions';

export const mockQuestions: Question[] = [
  {
    id: 1,
    question: 'Sales ledger control account contains the total amount in respect of',
    options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
    answer: 'Answer 1',
    subject: 'Accounting',
    explanation: 'The sales ledger control account summarizes the individual accounts in the sales ledger.',
  },
  {
    id: 2,
    question: 'Which of the following is a real gas?',
    options: ['Oxygen', 'Nitrogen', 'Hydrogen', 'All of the above'],
    answer: 'All of the above',
    subject: 'Physics',
    explanation: 'Real gases have volume and intermolecular forces, unlike ideal gases. Oxygen, nitrogen, and hydrogen are all real gases.',
  },
  {
    id: 3,
    question: 'Who wrote the play "The Lion and the Jewel"?',
    options: ['Chinua Achebe', 'Wole Soyinka', 'Ben Okri', 'Chimamanda Ngozi Adichie'],
    answer: 'Wole Soyinka',
    subject: 'English',
    explanation: 'Wole Soyinka, a Nigerian playwright, poet, and essayist, wrote "The Lion and the Jewel."',
  },
  {
    id: 4,
    question: 'Which of the following is NOT a part of the digestive system?',
    options: ['Stomach', 'Lungs', 'Small Intestine', 'Large Intestine'],
    answer: 'Lungs',
    subject: 'Biology',
    explanation: 'The lungs are part of the respiratory system, not the digestive system.',
  },
];