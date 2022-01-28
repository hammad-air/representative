const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3300

app.use(expressLayouts)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('home')    // yahan say hamara Pura project server ma chal raha hay
  })

  app.get('/cart', (req, res) => {
    res.render('customer/cart')    // yahan say hamara Pura project server ma chal raha hay
  })

  app.get('/login', (req, res) => {
    res.render('auth/login')    // yahan say hamara Pura project server ma chal raha hay
  })

  app.get('/register', (req, res) => {
    res.render('auth/register')    // yahan say hamara Pura project server ma chal raha hay
  })

  app.listen(PORT, () =>{
    console.log(`Server is listen at ${PORT}`)
})