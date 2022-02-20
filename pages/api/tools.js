export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      toolName: "Javscript",
      svgSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
      website: "https://www.javascript.com/",
    },
    {
      id: 2,
      toolName: "Typescript",
      svgSource: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      website: "https://www.typescriptlang.org/",
    },
    {
      id: 3,
      toolName: "Node.js",
      svgSource: "/api/assets/nodejs.svg",
      website: "https://nodejs.org/en/",
    },
    {
      id: 4,
      toolName: "Docker",
      svgSource: "/api/assets/docker.svg",
      website: "https://www.docker.com/",
    },
    {
      id: 5,
      toolName: "Git",
      svgSource: "https://upload.wikimedia.org/wikipedia/commons/0/03/Git_format.png",
      website: "https://git-scm.com/",
    },
    {
      id: 6,
      toolName: "GitHub",
      svgSource: "https://upload.wikimedia.org/wikipedia/commons/4/4a/GitHub_Mark.png",
      website: "https://github.com"
    },
    {
      id: 7,
      toolName: "Ubuntu",
      svgSource: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo-ubuntu_cof-orange-hex.svg",
      website: "https://www.ubuntu.com/",
    },
    {
      id: 8,
      toolName: "Visual Studio Code",
      svgSource: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      website: "https://code.visualstudio.com/",
    },
    {
      id: 9,
      toolName: "Railway App",
      svgSource: "https://railway.app/brand/logo-dark.svg",
      website: "https://railway.app/",
    }

  ])
}