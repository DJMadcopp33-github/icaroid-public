const mongoose = require('mongoose')
const { mongoPath } = require('./config.json')

module.exports = async () => {
  await mongoose.connect('mongodb+srv://Madcop:BuckyMaxMax112@discordjs.cplrv.azure.mongodb.net/Data', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  return mongoose
}