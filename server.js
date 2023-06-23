require("dotenv").config();

const app = require("./app")

const PORT = 8888 || process.env.PORT;

app.listen(8888, () => {
  console.log("Server is now running on port " + PORT);
});