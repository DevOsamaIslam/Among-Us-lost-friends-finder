import express from 'express'
const router = express.Router()
import E from 'http-errors'
import User from '../model/User.js'
// import fs from 'fs'

/* GET home page. */
router.get('/', async (req, res) => {
  let results = await User.find().limit(100).sort({dateCreated: -1}).lean()
  res.json({results})
})

router.post('/new', async (req, res, next) => {
  /* expected object example
  {
    "myInfo": {
        "tag": "Agent 47",
        "color": "black"
    },
    "theirInfo": [{
        "tag": "SharkyBoy",
        "color": "Cyan"
    }],
    "map": "Skeld",
    "server": "Europe",
    "description": "Something something..",
    "comms": [{
        "platform": "discord",
        "name": "Agent 47#5261",
        "url": "https://discordapp.com/users/716138240238813214"
    }]
}
  */
  // let path = './public/images/uploads'
  let form = req.body
  // let images = req.files.images
  // let entry = await processForm(form)
  User.create(form, async (err, data) => {
    if(err) return next(E.InternalServerError())
    // fs.mkdirSync(`${path}/${data.id}`)
    // for (const image of images) {
    //   let imagePath = `${path}/${data.id}/${image.name}`
    //   await image.mv(imagePath)
    //   data._doc.images.push(imagePath)
    // }
    // data.save()
    res.json(data)
  })
})

router.get('/search', async (req, res) => {
  let results = await User.find().lean()
  res.json(results)
})

router.get('/addDummy', (req, res) => {
  addDummyData()
  res.send('Dummy is being added..')
})

const addDummyData = () => {
  const tags = [
    'Osama', 
    'Alamo', 
    'Ahmed', 
    'Salim', 
    'Talha', 
    'Fattah', 
    'Malik', 
    'Noor', 
    'Bakil', 
    'Zuhayr', 
    'Jamal', 
    'Bakr', 
    'SharkyBoy', 
    'Bella', 
    'Harambe', 
    'Dot'
  ]
  const colors = [
    'White', 
    'Black', 
    'Brown', 
    'Orange', 
    'Green', 
    'Lime', 
    'Purple', 
    'Cyan', 
    'Blue', 
    'Red', 
    'Yellow'
  ]
  const servers = [
    'Asia', 
    'Europe', 
    'North America'
  ]
  const maps = [
    'Skeld', 
    'Mira HQ', 
    'Polus'
  ]
  
  let data = []
  
  for (let i = 0; i < 1000; i++) {
    data.push({
      myInfo: {
        tag: tags[Math.floor((Math.random()* tags.length))],
        color: colors[Math.floor((Math.random()* colors.length))]
      },
      theirInfo: [
        {
          tag: tags[Math.floor((Math.random()* tags.length))],
          color: colors[Math.floor((Math.random()* colors.length))]
        }
      ],
      description: 'No Description',
      server: servers[Math.floor((Math.random()* servers.length))],
      map: maps[Math.floor((Math.random()* maps.length))],
      date: new Date()
    })
  }
  
  User.insertMany(data, (err) => {
    if(err) throw err
    console.log('data added')
  })
}

router.get('/deleteDummy', (req, res) => {
  User.deleteMany({}, (err) => {
    if(err) throw err
    res.send('Deleted all dummy')
  })
})

export default router
