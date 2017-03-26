var request = require('request')
module.exports = (req, res, next) => {
  if (!req.session.user_id) {
    next()
  } else {
    // Enviar el req.session.user_id al API y guardar el modelo general
    request('http://localhost:3000/api/user/'+req.session.user_id, (error, response, body) => {
      if (error) return res.status(500).send(error)
      if (response.statusCode != 200) {
        console.log(response.body)
        return res.redirect('/')
      }
      res.locals = { user: JSON.parse(body) }
      res.redirect('/perfil')
    })
  }
}
