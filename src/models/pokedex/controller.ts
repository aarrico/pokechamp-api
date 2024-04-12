import { PrismaClient } from '@prisma/client';
import { fetchPokedexes } from './db';

const getPokedexes = async (db: PrismaClient, queryParams: any) => {
  return fetchPokedexes(db);
};

export { getPokedexes };
