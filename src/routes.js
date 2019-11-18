'use strict';

const express = require('express');

const articlesData = require('./mockArticlesData');

const router = express.Router();

router.get('/', function(req, res, next) {
  const articles = Object.keys(articlesData).map(urlId => {
    return Object.assign({}, articlesData[urlId], {urlId});
  });
  return res.render('pages/home.html', { articles });
});

router.get('/post/:urlId', function(req, res, next) {
  const { urlId } = req.params;
  if (articlesData[urlId]) {
    const a = Object.assign({}, articlesData[urlId], { urlId });
    return res.render('pages/article.html', { a });
  } else {
    return next();
  }
});


router.get('/about', function(req, res, next) {
  return res.render('pages/about.html');
});

// Handling 404 - 404 error page
router.use(function(req, res, next) {
  res.status = 404;
  return res.render('pages/404.html');
});

// Handling all other errors
router.use(function(req, res, next) {
  res.status = 500;
  return res.render('500.html');
});


module.exports = router;
