const user = require('../../models/user')

module.exports = (express) => {
  const router = express.Router();

router.post('/user', (req, res) => {

  user.create(req.body, (err) => {
    req.body.miniurl.miniurl();
    var miniurl = require('../urlshortner');
    res.json({user: req.body.urlshortner/miniurl.miniurl()});
    res.status(500).json(err);
  }, (data) => {
    res.status(200).json(data);
  })
});


//gets all urls
router.get('/user', (req, res) => {
  url.findAll((err) => {
    res.status(500).json(err);
  })
});

//gets url by specific id
router.get('/user/:id', (req, res) => {
  req.body.id = req.params.id;
  url.find(req.body, (err) => {
    req.status(500).json (err);
  })
});

//updates the url
router.post('/user/:id', (req, res) => {
  req.body.id = req.params.id;
  user.update(req.body, (err) => {
    res.status(500).json(err);
  }, (data) => {
    res.status(200).json(data);
  })
});

//delete the url according to id number
router.delete('/user/:id', (req, res) => {
  req.body.id = req.params.id;
  user.destory (req.body, (err) => {
    res.status(500).json(err);
  }, (data => {
    res.status(200).json(data);
  }))
});

return router;
};
