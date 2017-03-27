* Mejorar modelo en la BD, redes sociales y portafolio
* Registro de Usuario, pedir si es artista o no
* Login y sesion
* Middleware que guarde id de usuario en req
* Edicion de info perfil
* Añadir Obra
* Busqueda de obras en nombre y descripcion
* Busqueda de artista
- Perfil de Artista
- Perfil de Obra
- Agregar Indexacion desde mongoose (Por ahora se hace directo en la BD bd.collection.createIndex({campo:"texto"}))
- Arreglar error se cruza bio con email (revisar api/users hay users con el email en bio, probablemente error de signup)
* Middleware de artista o usuario
- Añadir middlewares isAuth e isArtist a rutas
- Crear todo lo del usuario normal (noArtist)
* Mejorar Middleware de sesion para no consultar a la BD
- Crear el sistema de imagenes para las obras, subida y muestra
- Crear el sistema de subida de imagen de perfil de artista
- Añadir sistema de puntuacion
- Añadir Comentarios
- Login y Registro con facebook
- Tener todas las imagenes en un Block Storage
- Deploy!
****EXTRAS TECH
* Fusionar con la rama del frontend
- uso de JWT para el API con USUARIO y CON LA WEB (Para que solo la web pueda hacer querys al API)
- GraphQL
- Dockers
