const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/about/:name', (req, res) => {
      const actualPage = '/about'
      const queryParams = { name: req.params.name }
      app.render(req, res, actualPage, queryParams)
  })

  // Deneme amacli about sayfasini da server side routing ile hakkimda ya yonlendirdim.
  server.get('/hakkimda', (req, res) => {
    const actualPage = '/about';
    app.render(req, res, actualPage);
  })

  server.get('/sayfa/:page', (req, res) => {
      const actualPage = '/articles'
      const queryParams = { perPage : req.params.perPage, page: req.params.page }
      app.render(req, res, actualPage, queryParams)
  })

  server.get('/arama/:title/:page', (req, res) => {
      const actualPage = '/articles'
      const queryParams = { title: req.params.title, page: req.params.page }
      app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
