// const http = require('http');

// const routes = require('./routes');

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

app.engine(
    'hbs',
    expressHbs({
      layoutsDir: 'views/layouts/',
      defaultLayout: 'main-layout',
      extname: 'hbs'
    })
);

// app.set('view engine', 'pug');
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// console.log(routes.someText);

// app.use('/', (req, res, next) => {
//     console.log('This always runs!');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('In the middleware!');
//     next(); // Allows the request to continue to the next middleware in line
// });

// app.use((req, res, next) => {
//     console.log('In another middleware!');
//     res.send('<h1>Hello from Express!</h1>');
// });

// // const server = http.createServer(routes.handler);

// const server = http.createServer(app);

// app.use('/add-product', (req, res, next) => {
//     // console.log('In another mega middleware!');
//     // res.send('<h1>The "Add Product" Page</h1>');
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
// });

// app.post('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });
  
// app.use('/', (req, res, next) => {
//     // console.log('In another middleware!');
//     res.send('<h1>Hello from Express!</h1>');
// });

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

// server.listen(3000);

app.listen(8000)
