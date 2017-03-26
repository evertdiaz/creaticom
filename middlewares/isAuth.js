var User = require('../models/user')
module.exports = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/')
  } else {
    User.findById(req.session.user_id, (err, user) => {
      if (err) {
        console.log(err)
        res.redirect('/')
      } else {
        res.locals = { user: user }
        next()
      }
    })
  }
}
