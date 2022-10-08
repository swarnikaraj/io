const { Schema, model } = require("mongoose");

const MovieSchema = new Schema({
    name: { type: String, required: true },
    producer_id: {
        type: Schema.Types.ObjectId,
        ref: "producer",
       
    },
    actor_ids: [{
        type: Schema.Types.ObjectId,
        ref: "actor",
      
    }],
    imageUrl:{ type: String, required: true },
    year: { type: Date, required: true },
    
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = model("movie", MovieSchema);