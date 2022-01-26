const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3300

app.use(express.static('public'))

app.get('/', (req, res) => {
    // res.send('HAMMAD SHEIKH')
    res.render('home')    // yahan say hamara Pura project server ma chal raha hay
  })

app.use(expressLayouts)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

app.listen(PORT, () =>{
    console.log(`Server is listen at ${PORT}`)
})