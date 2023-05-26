// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const shoppingCart = [];

app.post('/menu', (req, res) => {
  const { name, price, ingredients } = req.body;
  shoppingCart.push({ name, price, ingredients });
  res.redirect('/');
});

app.get('/order', (req, res) => {
  res.render('order.jade', { items: shoppingCart });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});