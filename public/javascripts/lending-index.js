function appendLendingList(lending) {
    $('#lendingList').append(
        '<tr>\
        <td><a href="#path-to-reader" class="text-muted">' + lending.reader + '</a></td>\
        <td><a href="#path-to-lendcard" class="text-muted">' + lending.id + '</a></td>\
        <td>' + lending.lendDate + '</td>\
        <td>' + lending.expireDate + '</td>\
        <td>' + lending.state + '</td>\
        <td>\
          <a href="#path-to-edit" data-toggle="tooltip" title="Chỉnh sửa">\
            <i class="fa fa-wrench"></i></a>\
          &#x2758\
          <a href="#path-to-remove" data-toggle="tooltip" title="Xóa" onclick="confirm("Xác nhận trước khi xóa");">\
            <i class="fa fa-trash"></i></a></td>\
      </tr>'
    )
}

$(function() {
    $('#lendingList').ready(function() {
        $.ajax({
            url: '/lendings/get-list',
            type: 'GET',
            success: (list) => {
                list.forEach((lending) => {
                    appendLendingList(lending);
                });
            }
        })
    })
})