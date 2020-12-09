const mongoose = require('mongoose')
const { mongoPath } = require('./config.json')

module.exports = async () => {
  await mongoose.connect('mongo code here', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  return mongoose
}
