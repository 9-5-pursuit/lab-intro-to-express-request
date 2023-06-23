const express = require("express");

const router = express.Router();

// 99 Little Bugs In the Code
router.get("/", (req, res) => {
  let title = "99 little bugs in the code";
  let link = `<br/><a href="/bugs/101">Pull one down, Patch it around</a>`;
  res.send(`${title} ${link}`);
});

router.get("/:numberOfBugs", (req, res) => {
  let { numberOfBugs } = req.params;
  const line = `${numberOfBugs} little bugs in the code`;
  const add2 = +numberOfBugs + 2;
  const plus2Link = `<br><a href="/bugs/${add2}">Pull one down, Patch it around</a>`;
  const startOverLink = `<a href="/bugs">🕷️ Too many bugs! Start Over! 🕷️</a>`;
  const message = +numberOfBugs >= 200 ? startOverLink : line + plus2Link;
  res.send(message);

  // if (+numberOfBugs >= 200) {
  //     res.send(${startOverLink})
  // } else {
  //     res.send(`${line} ${plus2Link}`);
  // }
});

module.exports = router;
