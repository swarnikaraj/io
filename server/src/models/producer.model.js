const { Schema, model } = require("mongoose");

const ProducerSchema = new Schema({
    name: { type: String, required: true },
    gender: { type: String },
    dOB: { type: Date},
    bio: { type: String }
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = model("producer", ProducerSchema);