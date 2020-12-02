import dotenv from 'dotenv'
dotenv.config()

export default {
  database: {
    url: process.env.DB_URL || 'mongodb://localhost:27017/TEST_AU'
  }
}