const theme = require("jsonresume-theme-eloquent");

const resume = require("./thibaud-resume.json");
const html = theme.render(resume);

process.stdout.write(html);
