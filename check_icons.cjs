const si = require("react-icons/si");
const fa = require("react-icons/fa");

const icons = [
  "SiReact",
  "SiNextdotjs",
  "SiNodedotjs",
  "SiExpress",
  "SiMongodb",
  "SiMysql",
  "SiTypescript",
  "SiJavascript",
  "SiPython",
  "SiDjango",
  "SiHtml5",
  "SiCss3",
];

const missing = [];
for (const icon of icons) {
  if (si[icon] === undefined) {
    missing.push(icon);
  }
}
console.log("Missing SI:", missing);
