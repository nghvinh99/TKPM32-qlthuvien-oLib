const {book} = require('../../db/models/');

const presenter = {};

presenter.test = () => {
    console.log(book);
    data = {
        name:"Monsieur Tuna",
        author:"Tuân nhà văn",
        bookType:1
    }
    book.add(data, (err, res) => {
        if (err) console.log(err)
        else console.log(res)
    })
}

module.exports = presenter;