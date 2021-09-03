const router = require("express").Router();
const withAuth = require("../utils/auth");

// dashboard
router.get('/', withAuth, async (req, res) => {
   res.render('all-posts', {
       layout: 'dashboard',
       
   })
})

router.get('/newblog', withAuth, async (req, res) => {
    res.render('newblog', {
        layout: 'dashboard',
        
    })
 })
 

module.exports = router; 