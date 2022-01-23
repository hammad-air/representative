const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs');
const path = require('path')
const app = express();

const PORT = process.env.PORT || 3000
app.get('/', (req, res) => {
    // res.send('HAMMAD SHEIKH')
    res.render('home')
  })

app.use(expressLayouts)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

app.listen(PORT, () =>{
    console.log(`Server is listen at ${PORT}`)
})