const mongoose =  require("mongoose")


exports.connectDB = async () => {
     try {
       const conn = await mongoose.connect('mongodb://localhost/hng_recepie')

       if (process.env.NODE_ENV === 'development'){
         console.log(`MongoDB Connected in development enviroment`)
       } else {
         console.log(`MongoDB Connected in production  enviroment`)
       }
      
     } catch (error) {
        console.log(error)

     }
}