const { Schema, model } = require("mongoose");

const ActorSchema = new Schema({
    name: { type: String, required: true }, 
    gender: { type: String },
    dob: { type: Date},
    bio: { type: String }
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = model("actor", ActorSchema);