import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { app } from './app'


const start = async() => {
    console.log('Starting up...')
    if (!process.env.JWT_KEY) {
      throw new Error('JWT_KEY must be defined')
    }

    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI must be defined')
    }

    try {

      // Testing
      const mongo = new MongoMemoryServer();
      const mongoUri = await mongo.getUri()
      console.log(`mongoUri: ${mongoUri}`)
      await mongoose.connect(`mongodb://localhost:27017/japanese`, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true
      })

    

      // Prod
      // await mongoose.connect(process.env.MONGO_URI, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      //   useCreateIndex: true
      // })
      
      console.log('Connected to MongoDB')
    } catch (e) {
        console.error("Error connecting to MongoDB: ", e)
    }

    app.listen(3000, () => {
        console.log('Listening on port 3000!!!!!')
    })
}

start()