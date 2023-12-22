import dotenv from 'dotenv';
import express from 'express';

import { PrismaClient } from '@prisma/client';
import Context from './context';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.set('port', process.env.PORT || 3000);

app.use((req, _, next) => {
  Context.bind(req, { db: prisma });
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(app.get('port'), () => {
  console.log(
    `App is running at http://localhost:${app.get('port')} in ${app.get(
      'env',
    )} mode`,
  );
  console.log('Press CTRL-C to stop\n');
});

export default app;
