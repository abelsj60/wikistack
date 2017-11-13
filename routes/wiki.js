const express = require('express');
const router = express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;

module.exports = router;

router.get('/', (req, res, next) => {
  res.redirect('/');
  // res.send('wiki route is active!');
});

router.post('/', (req, res, next) => {
  res.json(req.body);
  let title = req.body.title;
  let content = req.body.content;
  let page = Page.build({
    title: title,
    content: content
  });
  page.save();
  res.redirect('/');
  // console.log(req.body.title);
  // res.send(req.body);
  // res.send('post method is active, too');
});

router.get('/add', (req, res, next) => {
  res.render('addpage');
  // res.send('wiki-add route is active!');
});
