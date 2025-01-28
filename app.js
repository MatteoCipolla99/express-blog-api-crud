const express = require("express");
const app = express();
const port = 3000;

//Routers
const postsRouter = require("./routers/postsRouter");
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");

//middleware per i file statici
app.use(express.static("public"));
app.use(express.json());


// Registro le rotte dell'app
app.use("/posts", postsRouter);

// Middleware 404
app.use(errorHandler)
// Middleware 500
app.use(notFound)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
