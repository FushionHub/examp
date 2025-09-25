export interface TutorialContent {
  type: 'paragraph' | 'image' | 'video';
  content: string;
}

export interface Tutorial {
  id: number;
  title: string;
  subject: string;
  description: string;
  content: TutorialContent[];
}