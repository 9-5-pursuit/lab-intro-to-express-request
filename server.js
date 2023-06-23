require("dotenv").config();

const app = require("./app");

const PORT = process.nextTick.PORT || 8888;

app.listen(PORT, () => {
  console.log(`Server is running on port ` + PORT);
});
