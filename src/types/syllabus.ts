export interface SyllabusTopic {
  title: string;
  subTopics: string[];
}

export interface Syllabus {
  id: number;
  exam: 'JAMB/UTME' | 'WAEC' | 'NECO';
  subject: string;
  topics: SyllabusTopic[];
}