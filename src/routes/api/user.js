const user = require('../../models/user');

module.exports = (express) =>{
  const router = express.Router();

  router.post('/users', (req, res) => {
    console.log("route hit", req.body);
    res.json({
      healthy: true,
    })
  });

  //create
  router.post('/users', (req, res) => {
    user.create(req.body, (err) => {
      res.status(500).json(err);
    }), (data) => {
      res.status(200).json(data);
    }
  });

  return router;

}
