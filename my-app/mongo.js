const mongoose=require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/Project3Logins")
.then(()=> {
    console.log("Mongodb connected");
})
.catch(()=> {
    console.log("Mongodb failed");
})

const newSchema=new mongoose.Schema ({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

const collection = mongoose.model("collection", newSchema)

module.exports=collection