const express = require('express');
const router = express.Router();

router.get('/index', (req, res) => {
    let page = 'index';
    let params = {
        user: false,
        title: 'Sign-in'
    }
    res.render(page, params)

})

router.get('/sign-up', (req, res) => {
    let page = 'sign-up'
    let params = {
        user: false,
        title: 'Create Account',
        style: page
    }
    res.render(page, params)
})
router.get('/sign-in', (req, res) => {
    let page = '404';
    let params = {
        user: false,
        title: '404'
    }
    res.render(page, params)
})
router.get('/invoice', (req, res) => {
    let page = 'invoice';
    let params = {
        user: true,
        title: 'Invoice'
    }
    res.render(page, params)
})




module.exports = router;
