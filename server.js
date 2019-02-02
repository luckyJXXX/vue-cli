const path = require('path')
const serve = require('serve')

serve(path.join(__dirname, 'dist'), {
  port: 9090
})