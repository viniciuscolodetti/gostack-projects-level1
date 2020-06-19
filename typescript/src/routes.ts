import { Request, Response } from 'express';

import createUser from './services/CreateUser';

export function HelloWorld (request: Request, response: Response) {
  const user = createUser({
    email: 'vinicius.colodetti@gmail.com',
    password: 'senha',
    techs: [
        'Node.js',
        'ReactJS',
        'React Native',
        { title: 'JavaScript', experience: 100 }
      ]
  });

  return response.json({ message: 'Hello World' });
}
