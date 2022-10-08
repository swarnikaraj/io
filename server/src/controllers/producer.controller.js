const express = require("express");

const Producer = require("../models/producer.model");

const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/",  async(req, res) => {
    try {
      

        const producer = await Producer.create({
          name: req.body.name,
          dob:req.body.dob,
          bio:req.body.bio,
          gender:req.body.gender
        });

        return res.status(201).json({producer});
    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
});

router.get("/",async(req, res) => {
    const producer = await Producer.find().lean().exec();

    return res.send(producer);
});

router.patch("/:id", async (req, res) => {
    try {
 
          const producer = await Producer.findByIdAndUpdate(
             req.params.id ,
            req.body,
            { new: true }
          )
            .lean()
            .exec();
            return res.status(200).json({ producer });
        }
  
       catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
 
          const producer = await Producer.findByIdAndDelete(req.params.id)
            .lean()
            .exec();
            return res.status(200).json({ producer });
        }
  
       catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });

module.exports = router;