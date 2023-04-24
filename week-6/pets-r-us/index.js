const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const Customer = require('./models/customer')
const app = express(); 


app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs'); 

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const CONN = 'mongodb+srv://web340_admin:7654@bellevueuniversity.paicaia.mongodb.net/web340DB'

const PORT = process.env.PORT || 3000;

mongoose.connect(CONN).then(() => {
    console.log('Connection to MongoDB database was successful\n  If you see this message it means you were able to connect to your MongoDB Atlas cluster');
}).catch(err => {
    console.log('MongoDB Error: ' + err.message);
})


app.get('/', (req, res) => {
    res.render('index', {
        title: 'Pets-R-Us',
    });
});

app.get('/grooming', (req, res) => {
    res.render('grooming', {
        title: 'Pets-R-Us',
    })
});

app.get('/boarding', (req, res) => {
    res.render('boarding', {
        title: 'Pets-R-Us',
    })
});

app.get('/training', (req, res) => {
    res.render('training', {
        title: 'Pets-R-Us',
    })
});

app.get('/register', (req, res) => {
    res.render('register', {
        title: 'Pets-R-Us',
    })
});

app.post('/customers', (req, res, next) => {
    const newCustomer = new Customer({
        customerId: req.body.customerId, 
        customerFirstName: req.body.customerFirstName,
        customerLastName: req.body.customerLastName,
        email: req.body.email
    });

    Customer.create(newCustomer)
        .then((result) => {
            res.render('index', {
                title: 'Pets-R-Us'
            })
        })
        .catch((err) => {
            next(err);
        });
});

app.listen(PORT, () => {});