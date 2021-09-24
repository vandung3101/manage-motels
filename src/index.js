const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
var cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
// npm i cookie-parser express-handlebars jsonwebtoken mongoose method-override
// npm uninstall cookie-parser express-handlebars jsonwebtoken mongoose method-override

// my library
const route = require('./route/index');
// database
const db = require('./config/db/mongoDB/index');
// connect database 
db.connect();
// put and patch methods
app.use(methodOverride('_method'));
// cookies
app.use(cookieParser())

app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

// join file tinh
app.use(express.static(path.join(__dirname, 'public')));

//engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'views'));

// routes
route(app);

// run
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})
