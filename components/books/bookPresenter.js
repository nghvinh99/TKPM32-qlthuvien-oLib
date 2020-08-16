const { book } = require('../../db/models/');
const { bookType } = require('../../db/models/booktype')

const presenter = {};

presenter.getBookList = (req, res, next) => {
    book.getList((book, err) => {
        if (book) {
            res.render('components/books/index',
                {
                    title: 'Kho sách',
                    pageName: 'Danh sách sách',
                    book: book
                });
            console.log(book[0]['type.name']);
        } else if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(false);
        }

    });
}

presenter.addBook = (req, res, next) => {
    const data = res.body.data;
    console.log(data);
}

presenter.findById = (req, res, next) => {
    const bookId = req.body.bookId;
    book.findById(bookId, (book, err) => {
        if (err) {
            console.log(err);
            res.send("Error");
        }
        else {
            res.send(book);
        }
    })
}

presenter.getBookTypeList = (req, res, next) => {
    bookType.getBookTypeList((booktype, err) => {
        if (booktype) {
            res.render('components/books/typeList',
                {
                    title: 'Thể loại',
                    pageName: 'Thể loại',
                    booktype: booktype
                });
            console.log(booktype[0]);
        } else if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(false);
        }
    })
}


module.exports = presenter;