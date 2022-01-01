import express, { Router } from 'express';
import { helloRoutes } from './hello';

export default function routerIndex(): Router {
  const router = express.Router();
  router.use('/hello', helloRoutes());
  return router;
}
