const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log('I am awesome');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Can I be anymore awesome');
//   res.send('<p>Number 2 done</p>');
// });

app.use('/users', (req, res, next) => {
    console.log('/users middleware');
    res.send('<p>The Middleware that handles just /users</p>');
});

app.use('/', (req, res, next) => {
    console.log('/ middleware');
    res.send('<p>The Middleware that handles just /</p>');
});


app.listen(3000);
