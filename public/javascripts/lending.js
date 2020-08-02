$(function() {
    $('#submitLending').on('click', function() {

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
        const current = new Date();
        DayOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
        $.ajax({
            url: '/lendings/rule',
            type: 'GET',
            success: (rule) => {
                const expdate = new Date();
                expdate.setDate(current.getDate() + rule.maxTime);
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
    const stt = (countCurrentBook() + 1);
    $('#bookList').append(
        '<tr id="book-' + stt + '">\
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
        const bookId = window.prompt("Nhập mã sách");
        $.ajax({
            url: '/books/find-by-id',
            type: 'POST',
            dataType: 'json',
            data: { bookId },
            success: (book) => {
                if (book) {
                    appendBookList(book);    
                }
                else
                    alert("Mã sách không tồn tại");
            }
        })
    })
})

$(function() {
    $(document).on('click', '.remove', function() {
        const conf = confirm("Xác nhận xóa khỏi danh sách?");
        const bookId = $(this).parent().attr('id');
        if (conf) {
            $('#' + bookId).remove();
            reOrderListCount();
        }
    })
})