import * as express from 'express';
import users  from './routes/users';
import emails from './routes/emails';
import billing from './routes/billing';

const app = express();
app.use(express.json()); 

app.get('/', (request, response) => {
    response.send('Hello world!');
  });
   
app
  .use('/api/v2/users', users)
  .use('/api/v2/emails', emails)
  .use('/api/v2/billing', billing);

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listening on port ${port}.`);
});
