const express = require ( 'express' );
const app = express();
const PORT = 3300;
const morgan = require ( 'morgan' );
const body = require ( 'body-parser' );
const nunjucks = require ( 'nunjucks' );
const path = require ( 'path' );


var env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(express.static(path.join(__dirname, './public')));

app.get('/', function (req, res) {
  res.render('index');
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
