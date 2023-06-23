require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT;

app.listen(`${PORT}`, () => {
  console.log(`server is now running on port ${PORT}`);
});
