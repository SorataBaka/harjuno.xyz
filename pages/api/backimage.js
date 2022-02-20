const path = require("path")
const fs = require("fs")
export default function backgroundImage(req, res) {
  const imagePath = path.resolve("./public/main-background.jpg");
  const image = fs.readFileSync(imagePath);
  res.setHeader('Content-Type', 'image/jpeg');
  res.status(200).send(image);
}