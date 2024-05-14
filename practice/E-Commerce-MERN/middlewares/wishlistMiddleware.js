const User = require("../models/userModel")

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

module.exports = setWishlistLength