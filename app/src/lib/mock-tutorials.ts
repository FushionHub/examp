import { Tutorial } from '@/types/tutorials';

export const mockTutorials: Tutorial[] = [
  {
    id: 1,
    title: 'Introduction to Accounting',
    subject: 'Accounting',
    description: 'Learn the fundamentals of accounting, including debits, credits, and financial statements.',
    content: [
      { type: 'paragraph', content: 'Accounting is the language of business. It is the process of recording, summarizing, and reporting financial transactions.' },
      { type: 'image', content: 'https://i.imgur.com/example.png' },
      { type: 'paragraph', content: 'There are two main types of accounting: financial accounting and managerial accounting.' },
    ],
  },
  {
    id: 2,
    title: 'Newton\'s Laws of Motion',
    subject: 'Physics',
    description: 'An overview of Newton\'s three laws of motion, which are the foundation of classical mechanics.',
    content: [
      { type: 'paragraph', content: 'Newton\'s first law states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force.' },
      { type: 'video', content: 'https://www.youtube.com/embed/example' },
    ],
  },
  {
    id: 3,
    title: 'Understanding Shakespeare',
    subject: 'English',
    description: 'A guide to reading and understanding the works of William Shakespeare.',
    content: [
      { type: 'paragraph', content: 'William Shakespeare is widely regarded as the greatest writer in the English language and the world\'s pre-eminent dramatist.' },
      { type: 'paragraph', content: 'His works, including collaborations, consist of approximately 39 plays, 154 sonnets, two long narrative poems, and a few other verses, some of uncertain authorship.' },
    ],
  },
];