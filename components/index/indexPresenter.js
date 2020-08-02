const { rule } = require('../../db/models');

presenter = {};

presenter.getRule = async (req, res, next) => {
    const allRule = await rule.getRule();
    res.send(allRule)
}

module.exports = presenter;