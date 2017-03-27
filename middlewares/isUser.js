var request = require('request')
var apiURL = require('../config/api').url
module.exports = (req, res, next) => {
  request(apiURL + '/user/' + req.session.user_id, (error, response, body) => {
    if (!JSON.parse(response.body).isArtist) next()
    else res.redirect('/perfil')
  })
}
