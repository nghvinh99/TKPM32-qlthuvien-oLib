var expDate;

$(function() {
    $('#readerType').ready(function() {
        $.ajax({
            url: '/readers/get-type',
            type: 'GET',
            success: (allType) => {
                allType.forEach((type) => {
                    $('#readerType').append(
                    '<option value="' + type.id + '">' + type.name + '</option>'
                    )
                });
            }
        })
    })
})

$(function() {
    $('#createdAt').ready(function() {
        const current = new Date();
        const date = current.getDate();
        const month = current.getMonth() + 1;
        const year = current.getFullYear();
        const dateString = date + '/' + month + '/' + year;
        $('#createdAt').val(dateString);
    })
})

$(function() {
    $('#expiredAt').ready(function() {
        $.ajax({
            url: '/get-all-rule',
            type: 'GET',
            success: (rule) => {
                const maxTime = rule.maxValidCardPeriod;
                const expiredDate = new Date();
                expiredDate.setMonth(expiredDate.getMonth() + maxTime);
                expDate = expiredDate;
                const date = expiredDate.getDate();
                const month = expiredDate.getMonth() + 1;
                const year = expiredDate.getFullYear();
                const dateString = date + '/' + month + '/' + year;
                $('#expiredAt').val(dateString);
            }
        })
    })
})

$(function() {
    $('#readerInfo').submit(function(e) {
        const readerInfo = {
            name: $('#name').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            readerType: $('#readerType').val(),
            phone: $('#phone').val(),
            DoB: $('#DoB').val(),
            studentID: $('#studentID').val(),
            expiredAt: expDate,
            address: $('#address').val()
        }
        $.ajax({
            url: '/readers/add',
            type: 'POST',
            dataType: 'json',
            data: readerInfo,
            success: (respond) => {
                const err = respond.err;
                if (err) {
                    let errorMsg = err.errors[0].message;
                    if (errorMsg === "email must be unique")
                        errorMsg = "Email đã được sử dụng để đăng kí tài khoản";
                    alert(errorMsg)
                } else {
                    alert("Tài khoản " + readerInfo.email + " được tạo thành công")
                    window.location.replace("/readers/");
                }
            }
        })
        return false;
    })
})

function readerListCount() {
    return $('#readerList tr').length;
}

function appendReaderList(reader) {
    const order = readerListCount() + 1;
    $('#readerList').append(
        '<tr>\
        <td>' + order + '</td>\
        <td><a href="#path-to-user">' + reader.id + '</a></td>\
        <td><a href="#path-to-user">' + reader.name + '</a></td>\
        <td><a href="#path-to-user">' + reader.email + '</a></td>\
        <td>' + reader.createdAt + '</td>\
        <td>\
          <a href="#path-to-edit" data-toggle="tooltip" title="Chỉnh sửa">\
            <i class="fa fa-wrench"></i></a>\
          &#x2758\
          <a href="#path-to-remove" data-toggle="tooltip" title="Xóa" onclick="confirm("Xác nhận trước khi xóa");">\
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
