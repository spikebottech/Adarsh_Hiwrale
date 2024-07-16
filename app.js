const express = require('express');
const app = express();
const port = 3000;
const session = require('express-session')

app.use(session({
    secret: 'interview-task',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    },
    resave: true,
    saveUninitialized: false
}))

app.get('/', (req, res) => {
    if (req.session.counter) {
        req.session.counter = req.session.counter + 1;
    } else {
        req.session.counter = 1;
    }
    res.send('Hello World! Counter : ' + req.session.counter);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
