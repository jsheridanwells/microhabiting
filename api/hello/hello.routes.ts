import express, { Router, Request, Response } from 'express';
import hello from './hello';

export function helloRoutes(): Router {
  const router = express.Router();
  router.get('/', async (_, res: Response) => {
    const hellos = await hello.find({});
    res.status(200).send(hellos);
  });

  router.post('/', async (req: Request, res: Response) => {
    try {
      if(req && req.body && req.body.message) {
        await hello.create({ message: req.body.message });
        res.status(201).send();
      }
      else {
        res.status(400).send();
      }
    } catch(err) {
      res.status(500).send(err);
    }

  });

  return router;
}
