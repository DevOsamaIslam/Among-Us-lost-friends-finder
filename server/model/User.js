import mongoose from 'mongoose'

const options = {
  myInfo: {
    tag: String,
    color: String
  },
  theirInfo: {
    type: Array
  },
  server: {
    type: String
  },
  map: {
    type: String
  },
  description: {
    type: String,
    default: 'No description'
  },
  images: {
    type: Array,
    default: []
  },
  comms: {
    type: Array,
    default: []
  },
  dateAdded: {
    type: Date,
    default: new Date()
  }
}

const model = new mongoose.model('User', mongoose.Schema(options))

export default model
