const express = require("express");
const cors = require("cors");
require("./src/db/mongoose");

const userRouter = require("./src/routers/userRouter");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
