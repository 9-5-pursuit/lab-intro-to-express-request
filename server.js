const app = require("./app");

const PORT = 8888 || process.env.PORT;

// console.log(process.env);

app.listen(PORT, () => {
  console.log("server is now runnign on port" + PORT);
});
