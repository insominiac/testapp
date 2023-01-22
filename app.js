const express = require('express')
var fs = require('fs');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var htmlContent = '<html>Whatever</html>';
    fs.writeFile('./my-page.html', htmlContent, (error) => { /* handle error */ });
    res.status(200).send({
      message: 'Hello from AI!'
    })
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})