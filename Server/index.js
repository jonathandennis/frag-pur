const http = require('http')

let stones = [
    {
        id: 1,
        important: true,
        name: "Bianco Sivec",
        type: "Marbre",
        color: "Blanc",
        origin: "Macédoine",
        finish: "Poli",
        thickness: "3cm, 2cm",
        image: "assets/img/stone/BiancoSivec1.jpg",
        detail: [
            {image: "assets/img/stone/BiancoSivec2.jpg"},
            {image: "assets/img/stone/BiancoSivec3.jpg"},
            {image: "assets/img/stone/BiancoSivec4.jpg"},
            {image: "assets/img/stone/BiancoSivec5.jpg"}
        ]
    },
    {
        id: 2,
        important: true,
        name: "Labareda",
        type: "Quartz",
        color: "Multi",
        origin: "Macédoine",
        finish: "Poli",
        thickness: "3cm, 2cm",
        image: "assets/img/stoneLabareda1.jpg",
        detail: [
            {image: "assets/img/stone/Labareda2.jpg"},
            {image: "assets/img/stone/Labareda3.jpg"},
            {image: "assets/img/stone/Labareda4.jpg"},
            {image: "assets/img/stone/Labareda5.jpg"},
            {image: "assets/img/stone/Labareda6.jpg"},
            {image: "assets/img/stone/Labareda7.jpg"},
            {image: "assets/img/stone/Labareda8.jpg"}
        ]
    },
    {
        id: 3,
        important: true,
        name: "Lavender",
        type: "Onyx",
        color: "Bleu",
        origin: "Macédoine",
        finish: "Poli",
        thickness: "3cm, 2cm",
        image: "assets/img/stone/Lavender1.jpg",
        detail: [
            {image: "assets/img/stone/Lavender2.jpg"},
            {image: "assets/img/stone/Lavender3.jpg"},
            {image: "assets/img/stone/Lavender4.jpg"},
            {image: "assets/img/stone/Lavender5.jpg"},
            {image: "assets/img/stone/Lavender6.jpg"},
            {image: "assets/img/stone/Lavender7.jpg"},
            {image: "assets/img/stone/Lavender8.jpg"}
        ]
    }
  ]
  const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(stones))
  })
  
  const PORT = 3001
  app.listen(PORT)
  console.log(`Server running on port ${PORT}`)