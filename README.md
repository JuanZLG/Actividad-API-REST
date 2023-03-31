# Actividad-API-REST

Esta es una API que permite manipular datos de una base de datos anteriormente creada con MongoDB y NodeJS, para probarla solo debe ejecutarse "app.js", abrir Postman y
utilizar los distintos metodos http: GET cuando se utiliza find() o findOne() agregando el id del objeto que se busca anteponiendo un "/", PATCH cuando se usa update() 
o updateOne() agregando el id del objeto que se quiere modificar anteponiendo un "/" y dicho id, POST cuando se usa insertOne() o insertMany() (para registrar) y DELETE
para borrar con ayuda de deleteOne() un objeto especificando el id, o deleteMany() especificando los id de los objetos a eliminar.
