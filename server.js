const smartApp = require('./smartapp');
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());
app.post('/', (req, res, next) => {
  smartApp.handleHttpCallback(req, res);
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})