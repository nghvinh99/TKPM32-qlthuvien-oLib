var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/books/imported-year', (req,res,next)=>{
  res.render('components/statistics/books/importedYear', 
  { title: 'Thống kê',
    pageName: 'Thống kê theo tháng' });
});

router.get('/books/book-type', (req,res,next)=>{
  res.render('components/statistics/books/bookType', 
  { title: 'Thống kê',
    pageName: 'Thống kê theo thể loại sách' });
});

router.get('/readers/month', (req,res,next)=>{
  res.render('components/statistics/readers/month', 
  { title: 'Thống kê',
    pageName: 'Thống kê theo tháng' });
});

router.get('/readers/reader-type', (req,res,next)=>{
  res.render('components/statistics/readers/readerType', 
  { title: 'Thống kê',
    pageName: 'Thống kê theo tháng' });
});

router.get('/lendings/month', (req,res,next)=>{
  res.render('components/statistics/lendings/month', 
  { title: 'Thống kê',
    pageName: 'Thống kê theo tháng' });
});

router.get('/lendings/book-type', (req,res,next)=>{
  res.render('components/statistics/lendings/bookType', 
  { title: 'Thống kê',
    pageName: 'Thống kê theo tháng' });
});

router.get('/lendings/reader-type', (req,res,next)=>{
  res.render('components/statistics/lendings/readerType', 
  { title: 'Thống kê',
    pageName: 'Thống kê theo tháng' });
});

module.exports = router;
