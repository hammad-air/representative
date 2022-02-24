const menu = require("../../models/menu")

function homeController(params) {
    return{
        index(req,res) {
            menu.find().then(function (pizzas) {
                console.log(pizzas)
                res.render('home', {pizzas : pizzas})
            })
        }
    }
}

module.exports = homeController