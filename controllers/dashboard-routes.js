const router = require("express").Router();
const withAuth = require("../utils/auth");

// dashboard
router.get('/', withAuth, async (req, res) => {
   res.render('all-posts', {
       layout: 'dashboard',
       
   })
})

module.exports = router; 