const express = require("express");
const app = express();
const port = 3000;

//Routers
const postsRouter = require("./routers/postsRouter");

//middleware per i file statici
app.use(express.static("public"));
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
