const path = require('path');
const fs = require('fs');

export default function Node(req, res) {
  const imagePath = path.resolve("./public/nodejs.svg");
  const image = fs.readFileSync(imagePath);
  res.setHeader('Content-Type', 'image/svg+xml');
  res.status(200).send(image);
}