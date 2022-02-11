const express = require("express");
const port = process.env.PORT || 5000
const app = express();
const getUserTodos = require("./routes/apiRoutes");
app.use(express.json());

app.use(getUserTodos)

app.listen(port,()=>{
  console.log(`api is running on http://localhost:${port}`)
})

module.exports = app