const User = require('../models/user')

const errorHandler = require("../helpers/dbErrorHandler")

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            res.status(400).json({
                error: "User not found",
            })
       }
       req.profile = user
       next()
    })
}