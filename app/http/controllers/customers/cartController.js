function cartController() {
    return {
        index(req, res) {
            res.render('customer/cart')
        },
        //  Cart Updation 
        update(req, res) {
                // let cart = {
              //     items: {
            //         pizzaId: { item: pizzaObject, qty: 0 },
          //     },
        //      : 0,
      //     totalPrice: 0
    // }
            if (!req.session.cart) {
                req.session.cart = {
                    items: {},
                    totalQty: 0,
                    totalPrice: 0
                }
            }
            let cart = req.session.cart
            console.log(req.body)
            //  agr cart ma item na ho to kia krn
            if (!cart.items[req.body._id]) {
                cart.items[req.body._id] = {
                    item: req.body,
                    qty: 1,
                }
                cart.totalPrice =  cart.totalPrice + req.body.price ;
                cart.totalQty = cart.totalQty + 1
            }
               else{ 
                   cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1;
                   cart.totalPrice = cart.totalPrice + req.body.price;
                   cart.totalQty =  cart.totalQty + 1; 
   
            }
            return res.json({ totalQty : req.session.cart.totalQty })
        }
    } 
}

module.exports = cartController