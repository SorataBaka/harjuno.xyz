const path = require('path');
const fs = require('fs');

export default function Node(req, res) {
  const imagePath = path.resolve("./public/email.png");
  const image = fs.readFileSync(imagePath);
  res.setHeader('Content-Type', 'image/png');
  res.status(200).send(image);
}