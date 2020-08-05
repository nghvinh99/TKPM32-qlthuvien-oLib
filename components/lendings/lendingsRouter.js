var express = require('express');
var router = express.Router();

const lendingsPresenter = require('./lendingsPresenter');

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

router.get('/', lendingsPresenter.renderIndex);

router.get('/edit/:id', function(req, res, next) {
  res.render('components/lendings/editLendings', 
  { title: 'Quản lí mượn - trả',
    pageName: 'Cập nhật thẻ mượn' });
});

router.get('/remove/:id', function(req, res, next) {
  res.send("OK! Dù bấm OK hay Cancel thì luôn req link này --> cần xử lí khúc này khi code | Nếu không OK hay ko thì cũng xóa")
});

router.get('/add', lendingsPresenter.renderAddLending);

router.post('/add', lendingsPresenter.addNewLending);

router.get('/rule', lendingsPresenter.getLendingRule);

router.get('/reader/find-by-id', lendingsPresenter.findReaderById);

module.exports = router;
