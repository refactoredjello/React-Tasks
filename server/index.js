const app = require('./server.js')

console.log(app)
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('listening on port: ', PORT)
})