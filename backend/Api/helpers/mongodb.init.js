const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017",{dbName:"authentication_db"})
.then(()=>{
    console.log("connected to mongodb database")
})
.catch((err)=>{
    console.log(err)
})

process.on("SIGINT",async()=>{
    await mongoose.connection.close()
    process.exit(0)
})
