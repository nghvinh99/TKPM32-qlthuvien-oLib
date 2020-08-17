const { lending } = require('../../db/models/');
const { rule } = require('../../db/models/');
const { user } = require('../../db/models');

const presenter = {}

presenter.renderIndex = (req, res, next) => {
    res.render('components/lendings/index', 
  { title: 'Quản lí mượn - trả',
    pageName: 'Danh sách mượn trả' });
}

presenter.renderAddLending = (req, res, next) => {
    res.render('components/lendings/addLendings', 
  { title: 'Thêm thẻ mượn sách',
    pageName: 'Thêm thẻ mượn sách' });
}

presenter.addNewLending = (req, res, next) => {
    const data = req.body;
    lending.addNewLending(data, (newLending, err) => {
        console.log(newLending);
        if (err) {
            console.log(err)
            res.send("Error")
        } else {
            res.send(newLending)
        }
    })
}

presenter.findReaderById = async (req, res, next) => {
    const id = req.query.id;
    const reader = await user.findReaderById(id);
    try {
        res.send({reader});
    } catch (err) {
        console.log(err);
        res.send("Error");
    }
}

presenter.getList = (req, res, next) => {
    const filter = {}
    lending.getList(filter, (list, err) => {
        if (err) {
            console.log(err);
            res.send("Error");
        } else {
            res.send(list);
        }
    })
}

module.exports = presenter;