export type Choice = {
  text: string;
  nextQuestionId: number;
  value: string | number | boolean;
  template?: string;
};

export type Question = {
  id: number;
  title: string;
  description?: string;
  type: "question";
  defaultNext: number;
  choices: Choice[];
  responseKey: string;
};

export type Button =
  | {
      type: "Button";
      text: string;
      responseKey: string;
      choices: Choice[];
    }
  | { type: "Button"; text: string; link: string };

export type Element = {
  type: "Title" | "Description";
  text: string;
};

export type AlertStructure = (Element | Button)[];

export type Alert = {
  id: number;
  type: "alert";
  defaultNext?: number;
  structure: AlertStructure;
};

export type QuestionsSchema = (Question | Alert)[];