var express = require('express');
var router = express.Router();
const bookPresenter = require('./bookPresenter');

/* GET home page. */
router.get('/', (req, res, next) => {
  // bookPresenter.test();
  // res.send("OK");
  res.render('components/books/index', 
  { title: 'Kho sách',
    pageName: 'Danh sách sách' });
});

router.get('/advance-search', (req, res, next) => {
  res.render('components/books/advanceSearch', 
  { title: 'Tìm kiếm nâng cao',
    pageName: 'Tìm kiếm nâng cao' });
});

router.get('/management', (req, res, next) => {
  res.render('components/books/index', 
  { title: 'Quản lí kho sách',
    pageName: 'Quản lí kho sách' });
});

router.get('/info/:id', (req,res,next) => {
  res.render('components/books/singleBook', 
  { title: 'Chi tiết',
    pageName: 'Tên sách' });
});

router.get('/borrow-request', (req,res,next) => {
  res.render('components/books/borrowReq', 
  { title: 'Đăng kí mượn sách',
    pageName: 'Đăng kí mượn sách' });
});

router.get('/edit/:id', (req,res,next) => {
  res.render('components/books/singleBook', 
  { title: 'Chi tiết',
    pageName: 'Tên sách' });
});

router.get('/add-type', (req,res,next) => {
  res.render('components/books/typeList', 
  { title: 'Thêm mới',
    pageName: 'Thêm loại sách' });
});

router.get('/type/edit/:id', (req,res,next) => {
  res.send("OK! Chỉ sửa mỗi tên --> hiện ra cái gì đó cho nhập tên -> OK");
});

router.get('/type/remove/:id', (req,res,next) => {
  res.send("OK");
});

router.get('/add-book', (req,res,next) => {
  res.render('components/books/addBook', 
  { title: 'Thêm mới',
    pageName: 'Thêm sách' });
});

router.get('/remove/:id', (req,res,next) => {
  res.send("OK! Dù bấm OK hay Cancel thì luôn req link này --> cần xử lí khúc này khi code | Nếu không OK hay ko thì cũng xóa")
});

router.post('/find-by-id', bookPresenter.findById);

module.exports = router;
