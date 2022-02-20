const path = require('path');
const fs = require('fs');

export default function handler(req, res){
  const imagePath = path.resolve("./public/profile.jpg");
  const image = fs.readFileSync(imagePath);
  res.setHeader('Content-Type', 'image/jpeg');
  res.status(200).send(image);
}