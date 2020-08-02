const { user } = require('../../db/models/');
const { readerType } = require('../../db/models/');

presenter = {};

presenter.renderAddReader = (req, res, next) => {
    res.render('components/readers/addReader', 
    { title: 'Thêm độc giả',
      pageName: 'Thêm độc giả' });
}

presenter.getReaderType = async (req, res, next) => {
    const allType = await readerType.getAllType();
    res.send(allType);
}

presenter.addNewReader = (req, res, next) => {
    const readerInfo = req.body;
    console.log(readerInfo);
    console.log(readerInfo.name);
    res.end();
}

module.exports = presenter;