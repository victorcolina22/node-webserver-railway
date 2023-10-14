const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT
const hbs = require('hbs')

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

// Middleware: Función intermediaria, quiere decir que es una función
// que se ejecuta antes de una instrucción establecida.

// Servir contenido público/estático.
// Los archivos estáticos, en este caso la carpeta "public", tiene prioridad sobre las rutas declaradas, siempre buscará primeramente
// el archivo "index.html".
// Ej: Puedes crear una carpeta con la ruta "hola-mundo" y mostrará el archivo "HTML" declarado dentro de la carpeta.
app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Victor Colina',
    titulo: 'Curso de node'
  })
})
app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Victor Colina',
    titulo: 'Curso de node'
  })
  // res.sendFile(__dirname + '/public/generic.html')
})
app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Victor Colina',
    titulo: 'Curso de node'
  })
  // res.sendFile(__dirname + '/public/elements.html')
})

// Otra forma de servir archivos estáticos podría ser:
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})

// Port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})