const stonesRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Stone = require('../models/stone')
const User = require('../models/user')


stonesRouter.get('/', async (request, response) => {
  const stones = await Stone
    .find({}).populate('user', { username: 1, name: 1 })

  response.json(stones)
})

stonesRouter.delete('/:id', async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const stone = await Stone.findById(request.params.id)
  if (decodedToken.id.toString() === stone.user.toString()) {
    await stone.remove()
    return response.status(204).end()
  }
  response.status(404).json({ error: 'invalid action' })
})

stonesRouter.post('/', async (request, response) => {
  const body = request.body
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)

  const stone = new Stone({
    important: body.important || false,
    name: body.name,
    type: body.type,
    color: body.color,
    origin: body.origin,
    finish: body.finish,
    thickness: body.thickness,
    image: body.image,
    detail: body.detail,
    user: user,
  })
  const savedStone = await stone.save()
  user.stones = user.stones.concat(savedStone._id)
  await user.save()

  response.status(201).json(savedStone)
})

stonesRouter.put('/:id', async (request, response) => {
  const body = request.body

  const stone = {
    important: body.important,
    name: body.name,
    type: body.type,
    color: body.color,
    origin: body.origin,
    finish: body.finish,
    thickness: body.thickness,
    image: body.image,
    detail: body.detail,
  }

  const updatedStone = await Stone
    .findByIdAndUpdate(request.params.id, stone, { new: true })
    .populate('user', { username: 1, name: 1 })

  response.json(updatedStone.toJSON())
})

module.exports = stonesRouter