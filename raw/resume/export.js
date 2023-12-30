const path = require("path");
const fs = require("fs");
const theme = require("jsonresume-theme-eloquent");

const resume = require("./resume.json");

const picturePath = path.join(__dirname, "portrait-thibaud-256x256.jpg");
const picture = fs.readFileSync(picturePath, "binary");
const buffer = Buffer.from(picture, "binary");

resume.basics.picture = `data:image/jpeg;base64,${buffer.toString("base64")}`;

const html = theme.render(resume);

process.stdout.write(html);
