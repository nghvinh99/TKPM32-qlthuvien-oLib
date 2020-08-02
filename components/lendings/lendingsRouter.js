var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/my-lendings', function(req, res, next) {
  res.render('components/lendings/index', 
  { title: 'Mượn - trả',
    pageName: 'Danh sách mượn trả'});
});

router.get('/my-lendings/info/:id', function(req, res, next) {
  res.render('components/lendings/detailInfo', 
  { title: 'Quản lí mượn - trả',
    pageName: 'Chi tiết thẻ mượn' });
});

router.get('/', function(req, res, next) {
  res.render('components/lendings/index', 
  { title: 'Quản lí mượn - trả',
    pageName: 'Danh sách mượn trả' });
});

router.get('/edit/:id', function(req, res, next) {
  res.render('components/lendings/editLendings', 
  { title: 'Quản lí mượn - trả',
    pageName: 'Cập nhật thẻ mượn' });
});

router.get('/remove/:id', function(req, res, next) {
  res.send("OK! Dù bấm OK hay Cancel thì luôn req link này --> cần xử lí khúc này khi code | Nếu không OK hay ko thì cũng xóa")
});

router.get('/add', (req,res,next)=>{
  res.render('components/lendings/addLendings', 
  { title: 'Thêm thẻ mượn sách',
    pageName: 'Thêm thẻ mượn sách' });
});

module.exports = router;
