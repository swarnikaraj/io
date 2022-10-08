const express = require("express");

const Actor = require("../models/actor.model");

const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/",  async(req, res) => {
    try {
      

        const actor = await Actor.create({
            name: req.body.name,
            dob:req.body.dob,
            bio:req.body.bio,
            gender:req.body.gender
        });

        return res.status(201).json({actor});
    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
});

router.get("/",async(req, res) => {
    const products = await Actor.find().lean().exec();

    return res.send(products);
});

router.patch("/:id", async (req, res) => {
    try {
 
          const actor = await Actor.findByIdAndUpdate(
             req.params.id ,
            req.body,
            { new: true }
          )
            .lean()
            .exec();
            return res.status(200).json({ actor });
        }
  
       catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
 
          const actor = await Actor.findByIdAndDelete(req.params.id)
            .lean()
            .exec();
            return res.status(200).json({ actor });
        }
  
       catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });

module.exports = router;