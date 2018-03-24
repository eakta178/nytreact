const router = require("express").Router();
const request = require("request");
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

  router
  .route("/saved")
  .post(articlesController.create)


router.route("/scrape")
  .post((req,res) => {
    console.log(req.body);
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=8b13f6faea4f4027bc79868c0401931c&q=${req.body.topic}&begin_date=${req.body.start}0101&end_date=${req.body.end}0101`;

    request(url,function(response) {
       console.log("got the response"+ response);
       res.json(response);

      });
  
      // If we were able to successfully scrape and save an Article, send a message to the client
     
      console.log("Scrape Complete");
      res.redirect("/")
    });

 

module.exports = router;
