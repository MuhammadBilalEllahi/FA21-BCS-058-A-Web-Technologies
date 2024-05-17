const User = require("../models/userModel")
const Cart = require("../models/cartModel")

const setWishlistLength = async (req, res, next) => {
    try {
        let wishlistLength = 0

        if (req.session.user) {
            const { _id } = req.session.user;
            const user = await User.findById(_id)
            console.log(user.email)
            wishlistLength = user.wishlist.length;
        }
        res.locals.wishlistLength = wishlistLength
        next()
    } catch (error) {
        console.error('Error fetching wishlist length:', error)
        res.locals.wishlistLength = 0
        next()
    }
}



const setCartLength = async (req, res, next) => {
    try {
        let cartLength = 0

        if (req.session.user) {
            const { _id } = req.session.user;
            const user = await User.findById(_id)
            console.log(user.email)
            const cart = await Cart.findOne({ orderBy: _id })

            console.log(cart.products.length ?? 0)

            cartLength = cart.products.length ?? 0
            console.log("Cart", cartLength)
        }
        res.locals.cartLength = cartLength
        next()
    } catch (error) {
        console.error('Error fetching cart length:', error)
        res.locals.cartLength = 0
        next()
    }
}

module.exports = { setWishlistLength, setCartLength }