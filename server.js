const app = require("./app");


require("dotenv").config();

const PORT = process.env.PORT || 3001;

// console.log(process.env);

app.listen(PORT, () => {
  console.log("server is now runnign on port" + PORT);
});

