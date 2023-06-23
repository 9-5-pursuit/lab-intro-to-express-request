require("dotenv").config();

const app = require("./app");

const PORT = 8888 || process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is now running on port " + PORT);
});
