const express = require("express");
const cors = require("cors");
require("./src/db/mongoose");
const path = require("path");

const userRouter = require("./src/routers/userRouter");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(userRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
