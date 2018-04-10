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

router
  .route("/saved/add/:id")
  .post(articlesController.addNote)


router
  .route("/saved/delete/:id")
  .post(articlesController.delNote)


router.route("/scrape")
  .post((req,res) => {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=8b13f6faea4f4027bc79868c0401931c&q=${req.body.topic}&begin_date=${req.body.start}0101&end_date=${req.body.end}0101`;
    request(url,function(error, response, body) {
      if (error) {
        throw error;
      }
       res.send(body);
      });
    });



module.exports = router;
