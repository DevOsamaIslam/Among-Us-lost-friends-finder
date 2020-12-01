import mongoose from 'mongoose'
import keys from './keys.js'

export const connect = mongoose.connect(keys.database.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(() => console.log('connected to DB'))
  .catch(err => console.error(err))

export default { connect }