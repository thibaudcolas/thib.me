const fs = require("fs");
const path = require("path");
const eloquent = require("jsonresume-theme-eloquent");

const resumeRaw = fs.readFileSync(path.join(__dirname, "/resume.json"));
const resumeJSON = JSON.parse(resumeRaw, "utf-8");
const resumeHTML = eloquent.render(resumeJSON);

fs.writeFile(path.join(__dirname, "/resume.html"), resumeHTML, function(err) {
  console.log(err || "Resume exported to resume.html");
});
