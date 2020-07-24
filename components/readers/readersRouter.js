var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/my-account', function(req, res, next) {
  res.render('components/readers/account', 
  { title: 'Tài khoản',
    pageName: 'Tài khoản' });
});

router.get('/', (req,res,next)=>{
  res.render('components/readers/index', 
  { title: 'Quản lí tài khoản',
    pageName: 'Danh sách tài khoản' });
});

router.get('/edit/:id', (req,res,next)=>{
  res.render('components/readers/account', 
  { title: 'Quản lí tài khoản',
    pageName: 'Cập nhật thông tin tài khoản' });
});

router.get('/remove/:id', (req,res,next)=>{
  res.send("OK! Dù bấm OK hay Cancel thì luôn req link này --> cần xử lí khúc này khi code | Nếu không OK hay ko thì cũng xóa")
});

router.get('/add', (req,res,next)=> {
  res.render('components/readers/addReader', 
  { title: 'Thêm độc giả',
    pageName: 'Thêm độc giả' });
});


module.exports = router;
