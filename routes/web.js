const authController = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/customers/cartController')
const homeController = require('../app/http/controllers/homeController')

function initRoutes(app) {   // Apny sary Routes Hum isi ma rkhyn gay
     app.get('/', homeController().index)
     app.get('/login', authController().login)

     app.get('/register', authController().register)
     app.post('/register', authController().postRegister)

     app.get('/cart', cartController().index)
     app.post('/update-cart', cartController().update)
}

module.exports = initRoutes