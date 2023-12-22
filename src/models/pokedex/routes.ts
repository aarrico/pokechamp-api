import { Router, Request, Response } from 'express';
import { getPokedexes } from './controller';

const router = Router();

router.get('/', (req: Request, res: Response) => {});
