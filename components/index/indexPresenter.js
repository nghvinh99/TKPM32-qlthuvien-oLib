const { rule } = require('../../db/models');

presenter = {};

presenter.getRule = async (req, res, next) => {
    rule.getRule((allRule, err) => {
        if (err) {
            console.log(err);
            res.send("Error");
        } else {
            res.send(allRule);
        }
    })
}

module.exports = presenter;