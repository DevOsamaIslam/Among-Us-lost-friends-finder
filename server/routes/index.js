import express from 'express'
const router = express.Router()
import E from 'http-errors'
import User from '../model/User.js'
import fs from 'fs'

/* GET home page. */
router.get('/', async (req, res, next) => {
  let results = await User.find().lean()
  res.json({results})
})

router.post('/new', async (req, res, next) => {
  let path = './public/images/uploads'
  let form = req.body
  let images = req.files.images
  let entry = await processForm(form)
  User.create(entry, async (err, data) => {
    if(err) return next(E.InternalServerError())
    fs.mkdirSync(`${path}/${data.id}`)
    for (const image of images) {
      let imagePath = `${path}/${data.id}/${image.name}`
      await image.mv(imagePath)
      data._doc.images.push(imagePath)
    }
    data.save()
    res.json(data)
  })
})

const processForm = async (form) => {
  let myInfo = {
    tag: form.mytag,
    color: form.mycolor
  }
  let theirInfo = []
  typeof form.tag === 'string' ? form.tag = [form.tag] : null
  typeof form.color === 'string' ? form.color = [form.color] : null
  let tags = form.tag
  let colors = form.color
  for (let i = 0; i < tags.length; i++) {
    theirInfo.push({
      tag: tags[i],
      color: colors[i]
    })
  }

  return {
    myInfo,
    theirInfo,
    server: form.server,
    map: form.map,
    description: form.description || 'no description',
    comms: [
      {
        discord: 'discord.gg/invite/Nyr4GQjjNJ'
      }
    ]
  }


}

router.get('/search', async (req, res, next) => {
  let results = await User.find().lean()
  res.json(results)
})

export default router
