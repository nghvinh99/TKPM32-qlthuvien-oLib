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
    res.end();
    // lendingModel.addNewLending(data, (newLending, err) => {
    //     if (err) 
    //         res.send(err)
    //     else
    //         res.send(newLending)
    // })
}

presenter.getLendingRule = (req, res, next) => {
    rule.getRule((rules, err) => {
        if (err) {
            console.log(err);
            res.send("Error");
        } else {
            res.send(rules);
        }
    })
}

presenter.findReaderById = (req, res, next) => {
    const id = req.query.id;
    user.findById(id, (reader, err) => {
        if (err) {
            console.log(err);
            res.send("Error");
        } else {
            res.send({reader});
        }
    })
}

module.exports = presenter;