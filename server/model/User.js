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
    type: String
  },
  images: {
    type: Array,
    default: []
  },
  comms: {
    type: Array,
    default: []
  }
}

const model = new mongoose.model('User', mongoose.Schema(options))

export default model
