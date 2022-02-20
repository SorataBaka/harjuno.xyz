import fs from "fs"
import path from "path"
export default function Assets(req, res) {
  const {fileName} = req.query
  const filePath = `./public/${fileName}`
  if(!fs.existsSync(path.resolve(filePath))) return res.status(404).json({Status: 404, Message: "File not found"})
  const file = fs.readFileSync(path.resolve(filePath))
  const fileType = fileName.split(".")[1]
  let fileTypeHeader;
  if(fileType === "png") fileTypeHeader = "image/png"
  else if(fileType === "jpg") fileTypeHeader = "image/jpg"
  else if(fileType === "svg") fileTypeHeader = "image/svg+xml"
  else if(fileType === "ico") fileTypeHeader = "image/x-icon"

  //Set the header
  res.setHeader("Content-Type", fileTypeHeader)
  return res.status(200).send(file)
}