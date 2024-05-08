export type Choice = {
  id?: number;
  text: string;
  nextQuestionId?: number;
  value: string | number | boolean;
  template?: string;
  responseKey?: string;
};

export type Question = {
  id: number;
  title: string;
  description?: string;
  type: 'question';
  defaultNext?: number;
  choices: Choice[];
  responseKey: string;
};
export type QuestionNow = {
  id: number;
  type: 'question' | 'alert';
};

export type Button = {
  type: 'Button';
  text: string;
  nextQuestionId?: number;
  link?: string;
};

export type Element = {
  type: 'Title' | 'Description';
  text: string;
};

export type AlertStructure = (Element | Button)[];

export type Alert = {
  id: number;
  type: 'alert';
  responseKey: string;
  defaultNext?: number;
  structure: AlertStructure;
};

export type QuestionsSchema = Question | Alert;
