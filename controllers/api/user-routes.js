const router = require("express").Router();
const { User }= require('../../models')


//Endpoint for creating a user
router.post('/', async (req,res) => {
    console.log("/api/user endpoint triggered")
    console.log(req.body)
    try {
        const userData = await User.create(req.body);
    
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.username = userData.name;
          req.session.logged_in = true;
    
          res.status(200).json(userData);
        });
      } catch (err) {
        res.status(400).json(err);
      }
})
//logging in a user
router.post('/login', async (req, res) => {

})
//Logging out a user
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



module.exports = router; 