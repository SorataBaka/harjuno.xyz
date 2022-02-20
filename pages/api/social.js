export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      socialName: "Instagram",
      svgSource: "https://upload.wikimedia.org/wikipedia/commons/9/96/Instagram.svg",
      website: "https://www.instagram.com/tiaan_jpeg",
    },
    {
      id: 2,
      socialName: "Twitter",
      svgSource: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Twitter_font_awesome.svg",
      website: "https://twitter.com/tian_harjuno",
    },
    {
      id: 3,
      socialName: "LinkedIn",
      svgSource: "https://upload.wikimedia.org/wikipedia/commons/7/76/Font_Awesome_5_brands_linkedin.svg",
      website: "https://www.linkedin.com/in/christian-harjuno/",
    },
    {
      id: 4,
      socialName: "GitHub",
      svgSource: "https://upload.wikimedia.org/wikipedia/commons/4/4a/GitHub_Mark.png",
      website: "https://github.com/SorataBaka"
    },
    {
      id: 5,
      socialName: "Email",
      svgSource: "/api/images/email",
      website: "mailto:harjuno.tian@gmail.com",
    },
  ])
}