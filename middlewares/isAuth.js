var request = require('request')
var apiURL = require('../config/api').url
module.exports = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/auth')
  } else {
    console.log(req.session)
    // Enviar el req.session.user_id al API y guardar el modelo general
    request(apiURL + '/user/' + req.session.user_id, (error, response, body) => {
      if (error) return res.status(500).send(error)
      if (response.statusCode !== 200) {
        console.log(response.body)
        return res.redirect('/')
      }
      res.locals = { user: JSON.parse(body) }
      next()
    })
  }
}
