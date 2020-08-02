const { book } = require('../../db/models/');

const presenter = {};

presenter.findById = (req, res, next) => {
    const bookId = req.body.bookId;
    book.findById(bookId, (book, err) => {
        if (err) {
            console.log(err);
            res.send("Problem occurred!");
        }
        else if (book) {
            console.log(book);
            res.send(book);
        }
        else 
            res.send(false);
    })
}

module.exports = presenter;