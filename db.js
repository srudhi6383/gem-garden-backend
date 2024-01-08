const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://srudhi24:srudhimongodb123@cluster0.m9slaat.mongodb.net/gem-garden")


module.exports = {connection}