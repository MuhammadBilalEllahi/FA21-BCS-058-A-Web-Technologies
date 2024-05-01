const { default: mongoose } = require("mongoose")


const dbConnect = ()=>{
    try {
        const con = mongoose.connect(process.env.MONGODB_URL)
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log(`Database has Error: ${error}`)
    }
}

module.exports = dbConnect