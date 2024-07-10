const mongoose = require("mongoose")
require("dotenv").config();
let BASE_URL = "mongodb+srv://hiteshnavghade75:Oes9WZWgMdYZ1Xtt@cluster0.fljqqbs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
console.log(BASE_URL)
mongoose.connect(BASE_URL)
    .then(() => {
        console.log("Connected to db...")
    })
    .catch(() => {
        console.log("Failed to connect to db")
    })