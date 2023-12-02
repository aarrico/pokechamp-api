import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(
    `App is running at http://localhost:${app.get('port')} in ${app.get(
      'env',
    )} mode`,
  );
  console.log('Press CTRL-C to stop\n');
});

export default app;
