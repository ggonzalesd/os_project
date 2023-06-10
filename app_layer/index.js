const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const { config } = require('./config/env');
const apiRouter = require('./routers');
const applyErrorHandlers = require('./middlewares/error.api.handler');

const app = express();
const port = config.port;

const url = `mongodb://${config.dbhost}:${config.dbport}/${config.dbname}`

mongoose.connect(url)
.then( () => console.log("Connected") )
.catch( (err) => console.error(err));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    "message": "Hello World!"
  });
})

app.use('/api/v1', apiRouter);

applyErrorHandlers(app);

app.listen(port, ()=>
  console.log(`Server listening at ${port}`)
)