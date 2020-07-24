var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('components/rules/index',
    { title: 'Quy định',
      pageName: 'Quản lí quy định' });
});

router.get('/edit/:id', (req, res, next) => {
  res.render('components/rules/editRule',
    { title: 'Quy định',
      pageName: 'Thay đổi quy định' });
});

module.exports = router;