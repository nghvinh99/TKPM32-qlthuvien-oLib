var express = require('express');
var router = express.Router();

const readerPresenter = require('./readersPresenter');

/* GET users listing. */
router.get('/my-account', function(req, res, next) {
  res.render('components/readers/account', 
  { title: 'Tài khoản',
    pageName: 'Tài khoản' });
});

router.get('/', readerPresenter.renderIndex);

router.get('/edit/', readerPresenter.renderEditReader);

router.get('/delete', readerPresenter.deleteReader);

router.get('/add', readerPresenter.renderAddReader);

router.post('/add', readerPresenter.addNewReader);

router.get('/get-type', readerPresenter.getReaderType);

router.get('/get-user-list', readerPresenter.getReaderList);

router.get('/find-by-id', readerPresenter.findById);

module.exports = router;
