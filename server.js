const app = require('./app')
//const logger = require('morgan')
//app.use(logger('dev'))
//app.use(express.json());
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });