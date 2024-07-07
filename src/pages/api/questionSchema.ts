import { NextApiRequest, NextApiResponse } from 'next'
import { QUESTIONS } from 'package'
import type { Choice, QuestionsSchema } from 'types'

type ErrorMessage = {
  message: string;
};

const Model = {
  async saveData(choices: Choice[]): Promise<Choice[]> {
    return choices;
  },
};

const Controller = {
  async handleGET(req: NextApiRequest, res: NextApiResponse<QuestionsSchema[]>) {
    res.status(200).json(QUESTIONS);
  },

  async handlePOST(req: NextApiRequest, res: NextApiResponse<Choice[]>) {
    const choices = req.body;
    const data = await Model.saveData(choices);
    res.status(201).json(data);
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuestionsSchema[] | Choice[] | ErrorMessage>,
) {
  const method = req.method;

  if (method === 'GET') {
    return Controller.handleGET(req, res as NextApiResponse<QuestionsSchema[]>);
  }
  if (method === 'POST') {
    return Controller.handlePOST(req, res as NextApiResponse<Choice[]>);
  }

  res.status(405).json({ message: 'The method is not supported' });
}
