function readerListCount() {
    return $('#readerList tr').length;
}

function appendReaderList(reader) {
    const order = readerListCount() + 1;
    $('#readerList').append(
        '<tr id="' + reader.id + '-reader">\
            <td>' + order + '</td>\
            <td><a href="/readers/edit/?id=' + reader.id + '">' + reader.id + '</a></td>\
            <td><a href="/readers/edit/?id=' + reader.id + '">' + reader.name + '</a></td>\
            <td><a href="/readers/edit/?id=' + reader.id + '">' + reader.email + '</a></td>\
            <td>' + reader.createdAt + '</td>\
            <td>\
            <a href="/readers/edit/?id=' + reader.id + '" data-toggle="tooltip" title="Chỉnh sửa">\
                <i class="fa fa-wrench"></i></a>\
            &#x2758\
            <a style="cursor:pointer;color:green" class="delete" data-toggle="tooltip" title="Xóa">\
                <i class="fa fa-trash"></i></a></td>\
        </tr>'
    )    
}

function getFilterValues() {
    const limit = $('#limit').val();
    const sortBy = $('#sortBy').val();
    const sort = $('#sort').val();
    const search = $('#search').val();
    const filter = {
        limit: limit,
        sortBy: sortBy,
        sort: sort,
        search: search
    };
    return filter;
}

$(function() {
    $('#readerList').ready(function() {
        const filter = getFilterValues();
        $.ajax({
            url: '/readers/get-user-list',
            type: 'GET',
            dataType: 'json',
            data: filter,
            success: (respond) => {
                const err = respond.err;
                if (err) {
                    alert("Error");
                } else {
                    list = respond.readerList;
                    list.forEach((reader) => {
                        appendReaderList(reader);
                    })
                }
            }
        })
    })
})

function updateListOnFilterChange() {
    $('#readerList').empty();
    const filter = getFilterValues();
    $.ajax({
        url: '/readers/get-user-list',
        type: 'GET',
        dataType: 'json',
        data: filter,
        success: (respond) => {
            const err = respond.err;
            if (err) {
                alert("Error");
            } else {
                list = respond.readerList;
                list.forEach((reader) => {
                    appendReaderList(reader);
                })
            }
        }
    })
}

$(function() {
    $('#limit, #sortBy, #sort').change(function() {
        updateListOnFilterChange();
    })
});

$(function() {
    $('#search').on('input', function() {
        updateListOnFilterChange();
    });
});

$(function() {
    $(document).on('click', '.delete', function() {
        const elementId = $(this).parent().parent().attr('id');
        const readerId = parseInt(elementId);
        const conf = confirm('Xác nhận xóa tài khoản độc giả có mã ' + readerId + '?');
        if (conf) {
            $.ajax({
                url: '/readers/delete',
                type: 'GET',
                data: {id: readerId},
                dataType: 'json',
                success: (respond) => {
                    if (respond != "Error") {
                        alert('Đã xóa tài khoản độc giả có mã ' + readerId);
                        updateListOnFilterChange();
                    }
                }
            })
        }
    })
})