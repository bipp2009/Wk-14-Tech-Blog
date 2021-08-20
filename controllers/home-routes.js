const router = require("express").Router();
const {Post, Comment, User} = require('../models/index')

//landing page of website -> we want to display all posts in db
router.get('/', async (req, res) => {
    res.render('all-posts')
})

//login endpoint -> login handlebars will be displayed when the user lands on /login
router.get('/login', async (req, res) =>{
    res.render('login')
})

//Sign Up endpoint
router.get('/signup', async (req, res) =>{
    res.render('signup')
})


module.exports = router;