import fs from "fs"
import path from "path"
export default function AssetAPI(req, res){
  const filesList = fs.readdirSync(path.resolve("./public"))
  return res.status(200).send(filesList)
}