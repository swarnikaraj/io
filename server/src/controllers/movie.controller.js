const express = require("express");

const Movie = require("../models/movie.model");

const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/",  async(req, res) => {
    try {
      

        const movie = await Movie.create({
            name: req.body.name,
            producer_id:req.body.producer_id,
            imageUrl:req.body.imageUrl,
            actor_ids:[req.body.actor_ids],
            year:req.body.year
        });

        return res.status(201).json({movie});
    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
});

router.get("/",async(req, res) => {
    const movie = await Movie.find().populate("actor_ids").populate("producer_id").lean().exec();

    return res.send(movie);
});

router.patch("/:id", async (req, res) => {
    try {
 
          const movie = await Movie.findByIdAndUpdate(
             req.params.id ,
            req.body,
            { new: true }
          )
            .lean()
            .exec();
            return res.status(200).json({ movie });
        }
  
       catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
 
          const movie = await Movie.findByIdAndDelete(req.params.id)
            .lean()
            .exec();
            return res.status(200).json({ movie });
        }
  
       catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });


  router.get("/:id", async (req, res) => {
    try {
 
          const movie = await Movie.findById(req.params.id).populate("actor_ids").populate("producer_id")
            .lean()
            .exec();
            return res.status(200).json({ movie });
        }
  
       catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });

module.exports = router;