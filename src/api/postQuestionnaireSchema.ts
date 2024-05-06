import { Choice } from 'types';

export const postQuestionnaireSchema = async (requestData: Choice[]): Promise<Choice[]> => {
  try {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_ORIGIN}/api/questionSchema`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(requestData),
    // });
    // const data = await res.json();
    // return data;
    return requestData;
  } catch (error) {
    throw new Error('Failed to post questionnaire schema');
  }
};
