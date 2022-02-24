function authController() {
    return{
        login(req,res) {
            res.render('auth/login')
        }, 
        register(req,res) {
            res.render('auth/register')
        },
        cart(req,res) {
            res.render('auth/cart')
        }
    }
    }


module.exports = authController