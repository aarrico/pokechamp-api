import { NextFunction, Request, Response, Router } from 'express';
import {
  ValidationChain,
  query,
  validationResult,
  matchedData,
} from 'express-validator';
import { getPokedexes } from './controller';

const mainSeriesChain = (): ValidationChain =>
  query('isMainSeries').optional().isBoolean();

const router = Router();

router.get(
  '/',
  mainSeriesChain,
  async (req: Request, res: Response, next: NextFunction) => {
    const validation = validationResult(req);

    if (!validation.isEmpty()) {
      return res.status(400).send({ errors: validation.array() });
    }

    const pokedexes = getPokedexes(req.db, matchedData(req));

    res.status(200).send(pokedexes);
  },
);

export default router;
