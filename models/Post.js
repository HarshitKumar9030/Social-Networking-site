const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    cloudinaryId: {
        type: String,
        require: true,
    },
    caption: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        required: true,
    },
    user: {
        type: Number,
        ref: "User",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model("Post", PostSchema);