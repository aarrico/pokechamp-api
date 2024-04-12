import { PrismaClient } from '@prisma/client';

const fetchPokedexes = async (
  db: PrismaClient,
  id: string = '',
  name: string = '',
  isMainSeries = true,
) => {
  if (id) {
    return db.pokedex.findUnique({ where: { id } });
  } else if (name) {
    return db.pokedex.findFirst({ where: { name } });
  } else {
    db.pokedex.findMany({
      where: { isMainSeries },
    });
  }
};

export { fetchPokedexes };
