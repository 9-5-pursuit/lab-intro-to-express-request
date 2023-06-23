const app = require("./app");
const dotenv = require("./app");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

// console.log(process.env);

app.listen(PORT, () => {
  console.log("server is now runnign on port" + PORT);
});

