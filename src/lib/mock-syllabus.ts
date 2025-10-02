import { Syllabus } from '@/types/syllabus';

export const mockSyllabus: Syllabus[] = [
  {
    id: 1,
    exam: 'JAMB/UTME',
    subject: 'Use of English',
    topics: [
      {
        title: 'Comprehension/Summary',
        subTopics: [
          'Description',
          'Narration',
          'Exposition',
          'Argumentation/Persuasion',
        ],
      },
      {
        title: 'Lexis and Structure',
        subTopics: [
          'Synonyms',
          'Antonyms',
          'Homonyms',
          'Clause and sentence patterns',
        ],
      },
    ],
  },
  {
    id: 2,
    exam: 'JAMB/UTME',
    subject: 'Mathematics',
    topics: [
      {
        title: 'Number and Numeration',
        subTopics: [
          'Number bases',
          'Fractions, Decimals, Approximations and Percentages',
          'Indices, Logarithms and Surds',
          'Sets',
        ],
      },
      {
        title: 'Algebra',
        subTopics: [
          'Variation',
          'Inequalities',
          'Progression',
          'Binary Operations',
        ],
      },
    ],
  },
];