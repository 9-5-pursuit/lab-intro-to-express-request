const app = require("./app");
const dotenv = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
