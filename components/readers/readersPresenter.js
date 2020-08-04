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

presenter.addNewReader = async (req, res, next) => {
    const readerInfo = req.body;
    readerInfo.DoB = readerInfo.DoB || null;
    try {
        const newReader = await user.addNewReader(readerInfo)
        res.send({ msg: "success", err: null });
    } catch (err) {
        res.send({ msg: null, err: err });
    } 
}

presenter.getReaderList = async (req, res, next) => {
    const filter = req.query;
    try {
        const readerList = await user.getReaderList(filter);
        res.send({ readerList: readerList, err: null});
    } catch(err) {
        console.log(err);
        console.log(parseInt(filter.search));
        console.log(isNaN(parseInt(filter.search)));
        res.send({ readerList: null, err: err});
    }
}

module.exports = presenter;