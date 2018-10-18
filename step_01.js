//  Week 06 Express: Basic Routing
//  Step 01

//  Import the express library
const express = require('express')

//  Create an instance of express
const app = express()

//  Declare a port to run on
const port = 3000

//  Declare a route

//  app.get(<path>, handler_function)
//  handler function takes req (the request obj) and res (the response obj) as
//  parameters, the function uses res to generate a response
app.get('/:id', function(req, res) {
  if (req.params.id == 6) {
    res.send('About')
  } else if (req.params.id == 2) {
    res.send('Hello World')
  } else {
    res.send("Different")
  }
})

//  Start Express Web Server i.e. start listing on the port you defined
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
