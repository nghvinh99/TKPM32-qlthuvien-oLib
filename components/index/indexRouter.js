var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('components/index/index', 
  { title: 'oLib',
    pageName: 'Trang chủ' });
});

router.post('/', (req, res, next) => {
  res.render('components/index/index', 
  { title: 'oLib',
    pageName: 'Trang chủ' });
});

router.get('/login', (req, res, next) => {
  res.render('components/index/login', 
  { title: 'Đăng nhập' });
});

router.get('/info', (req, res, next) => {
  res.render('components/index/info', 
  { title: 'Thông tin liên hệ',
    pageName: 'Thông tin liên hệ' });
})

router.delete('/', (req, res, next) => {
  res.send("OK");
})
module.exports = router;
