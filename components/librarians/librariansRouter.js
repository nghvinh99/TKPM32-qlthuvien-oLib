var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/my-account', function(req, res, next) {
  res.render('components/librarians/account', 
  { title: 'Tài khoản',
    pageName: 'Tài khoản' });
});

router.get('/', (req,res,next)=>{
  res.render('components/librarians/index', 
  { title: 'Quản lí thủ thư',
    pageName: 'Danh sách thủ thư' });
});

router.get('/edit/:id', (req,res,next)=>{
  res.render('components/librarians/account', 
  { title: 'Quản lí thủ thư',
    pageName: 'Cập nhật thông tin' });
});

router.get('/add', (req,res,next)=>{
  res.render('components/librarians/addLibrarian', 
  { title: 'Thêm mới',
    pageName: 'Thêm thủ thư' });
});

router.get('/remove/:id', (req,res,next)=>{
  res.send("OK! Dù bấm OK hay Cancel thì luôn req link này --> cần xử lí khúc này khi code | Nếu không OK hay ko thì cũng xóa")
});


module.exports = router;
