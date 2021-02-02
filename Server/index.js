
////// new index //////
// const http = require('http')
// const app = require('./app')
// const config = require('./utils/config')
// const logger = require('./utils/logger')

// const server = http.createServer(app)

// server.listen(config.PORT, () => {
//   logger.info(`Server running on port ${config.PORT}`)
// })

////// old index //////
const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))


const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(requestLogger)

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
      image: "assets/img/stone/Labareda1.jpg",
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

  app.get('/api/stones', (request, response) => {
    response.json(stones)
  })

  const generateId = () => {
    const maxId = stones.length > 0
      ? Math.max(...stones.map(s => s.id))
      : 0
    return maxId + 1
  }

  app.post('/api/stones', (request, response) => {
    const body = request.body
    
    if (!body.name) {
        return response.status(400).json({ 
          error: 'content missing' 
        })
      }
    
      const stone = {
        id: generateId(),
        important: body.important || false,
        name: body.name,
        type: body.type,
        color: body.color,
        origin: body.origin,
        finish: body.finish,
        thickness: body.thickness,
        image: body.image,
        detail: body.detail,
      }
    
      stones = stones.concat(stone)
    
      response.json(stone)
  })

  app.get('/api/stones/:id', (request, response) => {
    const id = Number(request.params.id)
    const stone = stones.find(stone => stone.id === id)
    response.json(stone)

    if (stone) {
      response.json(stone)
    } else {
      response.status(404).end()    
    }
  })

  app.delete('/api/stones/:id', (request, response) => {
    const id = Number(request.params.id)
    stones = stones.filter(stone => stone.id !== id)
  
    response.status(204).end()
  })

  app.use(unknownEndpoint)
  
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })