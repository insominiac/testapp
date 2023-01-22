const express = require('express')
var fs = require('fs');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var htmlContent = '<html>Whatever</html>';
    fs.writeFile('./my-page.html', htmlContent, (error) => { /* handle error */ });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})