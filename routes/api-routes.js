const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
    axios
        .get("GET https://www.googleapis.com/books/v1/volumes?q=", { params: req.query })
        .then(({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err));
});
  
module.exports = router;