export default {
  database: {
    url: `mongodb://${process.env.HOST || 'localhost'}:${process.env.PORT || 27017}/${process.env.DATABASE || 'TEST_AU'}`
  }
}