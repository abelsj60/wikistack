const express = require ( 'express' );
const app = express();
const PORT = 3000;
const morgan = require ( 'morgan' );
const bodyParser = require ( 'body-parser' );
const nunjucks = require ( 'nunjucks' );
const path = require ( 'path' );
const models = require ('./models');
const routes = require('./routes');

var env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', routes);
app.use(express.static(__dirname + '/public'));

// app.get('/', function (req, res) {
//   res.render('index');
// });

models.db.sync({force: true})
.then(function() {
  app.listen(PORT, function() {
    console.log(`Server is listening on port ${PORT}!`);
  });
})
.catch(console.error);



// models.User.sync({})
// .then(function () {
//   return models.Page.sync({});
// })
// .then(function() {
//   app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`);
//   });
// })
// .catch(console.error);

// Omri's comment: models.model('page')
