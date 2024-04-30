const { default: mongoose } = require("mongoose")

const dbConnect = ()=>{
    try {
        const con = mongoose.connect("mongodb://localhost:27017/ecom")
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log(`Database has Error: ${error}`)
    }
}

module.exports = dbConnect