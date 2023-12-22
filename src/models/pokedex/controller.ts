import { fetchPokedexes } from './db';

const getPokedexes = async () => {
  return fetchPokedexes();
};

export { getPokedexes };
