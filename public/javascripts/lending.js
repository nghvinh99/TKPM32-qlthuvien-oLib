var allRule;
var bookList = [];
var expDate;

$(function() {
    $('#lendCard').submit(function() {
        if (bookList.length != 0) {
            if ($('#identity small').length != 0) {
                const data = {
                    readerId: $('#readerID').val(),
                    lendDate: new Date(),
                    expDate: expDate,
                    bookListJson: JSON.stringify(bookList)
                }
                $.ajax({
                    url: '/lendings/add',
                    type: 'POST',
                    data: data,
                    dataType: 'json',
                    success: (respond) => {
                        alert("OK");
                    }
                })
            } else alert("Độc giả bạn êy");
        } else alert("Thêm sách bạn êy");
        return false;
    })
})


$(function() {
    $('#readerID').on('input', function() {
        const id = $('#readerID').val().replace(/ /g,'');
        if (id != "") {
            $.ajax({
                url: '/lendings/reader/find-by-id',
                type: 'GET',
                data: {id},
                dataType: 'json',
                success: (respond) => {
                    const reader = respond.reader;
                    if (reader) {
                        $('#warning').empty();
                        if ($('#identity small').length == 0)
                            $('#identity').append('<small>Độc giả: ' + reader.name + '</small>');
                    } else {
                        $('#identity').empty();
                        if ($('#warning small').length == 0)
                            $('#warning').append('<small>Không tìm thấy độc giả.</small>');
                    }
                }
            })
        } else {
            $('#warning').empty();
            $('#identity').empty();
        }
    })
})

$(function() {
    $('#lendDate').ready(function() {
        const current = new Date();
        DayOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
        const day = DayOfWeek[current.getDay()];
        const date = current.getDate();
        const month = current.getMonth() + 1;
        const year = current.getFullYear();
        const dateString = day + ', ' + date + '/' + month + '/' + year;
        $('#lendDate').val(dateString);
    })
})

$(function() {
    $('#retDate').ready(function() {
        DayOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
        $.ajax({
            url: '/lendings/rule',
            type: 'GET',
            success: (rule) => {
                allRule = rule;
                const expdate = new Date();
                expdate.setDate(expdate.getDate() + allRule.maxLendPeriod);
                expDate = expdate;
                const day = DayOfWeek[expdate.getDay()];
                const date = expdate.getDate();
                const month = expdate.getMonth() + 1;
                const year = expdate.getFullYear();
                const dateString = day + ', ' + date + '/' + month + '/' + year;
                $('#retDate').val(dateString);
            }
        })
    })
})

function countCurrentBook() {
    return $('#bookList tr').length;
}

function reOrderListCount() {
    let count = 0;
    $('.order').each(function() {
        count++;
        $(this).text(count);
    })
}

function appendBookList(book) {
    const bookInfo = {
        id: book.id,
        state: "lending",
        retDate: ""
    }
    bookList.push(bookInfo);
    const stt = (countCurrentBook() + 1);
    $('#bookList').append(
        '<tr id="' + stt + '-book">\
            <td class="order">' + stt + '</td>\
            <td><a href="#path-to-detail" class="text-muted">' + book.name + '</a></td>\
            <td>' + book["type.name"] + '</td>\
            <td>' + book.author + '</td>\
            <td class="remove">\
            <a style="cursor:pointer;color:green" data-toggle="tooltip" title="Xóa">\
            <i class="fa fa-trash"></i></a></td>\
        </tr>')
}

$(function() {
    $('#addBook').click(function() {
        const quantity = countCurrentBook();
        if (quantity >= allRule.maxLendBookQuantity) {
            alert("Số sách mượn đã đạt tối đa, không thể mượn thêm");
        } else {
            const bookId = parseInt(window.prompt("Nhập mã sách"));
            if (isNaN(bookId)) {
                alert("Nhập không hợp lệ");
            } else {
                $.ajax({
                    url: '/books/find-by-id',
                    type: 'POST',
                    dataType: 'json',
                    data: { bookId },
                    success: (book) => {
                        if (book) {
                            appendBookList(book);    
                            alert("Đã thêm sách " + book.name + " vào danh sách")
                        }
                        else
                            alert("Mã sách không tồn tại");
                    }
                })
            }
        }
    })
})

$(function() {
    $(document).on('click', '.remove', function() {
        const conf = confirm("Xác nhận xóa khỏi danh sách?");
        const bookId = $(this).parent().attr('id');
        if (conf) {
            const indexInList = parseInt(bookId) - 1;
            bookList.splice(indexInList, 1);
            $('#' + bookId).remove();
            reOrderListCount();
        }
    })
})