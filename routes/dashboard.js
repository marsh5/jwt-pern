const router = require("express").Router();
const pool = require("../db");
const authorization = require('../middleware/authorization')

router.get("/", authorization, async (req, res) => {
    try {

        //this only gets run if authorization middleware is succesfully return. So req.user has the payload
        res.json(req.user)
        
    } catch (err) {
        console.error(err.message)
        res.status(500).json("Server Error");
    }
})


module.exports = router;