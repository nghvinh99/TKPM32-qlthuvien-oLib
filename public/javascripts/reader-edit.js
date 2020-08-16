function formatDateString(DATE) {
    const d = new Date(DATE);
    const date = "0" + d.getDate();
    let month = d.getMonth() + 1;
    month = "0" + month;
    const year = d.getFullYear();
    const dateStr = date.substr(-2, 2) + "/" + month.substr(-2, 2) + "/" + year;
    return dateStr;
}

function renderReader(id) {
    $.ajax({
        url: '/readers/find-by-id',
        type: 'GET',
        dataType: 'json',
        data: {id},
        success: (reader) => {
            $('#type').html(reader["type.name"]);
            $('#id').html(reader.id);
            $('#name').val(reader.name);
            $('#email').val(reader.email);
            $('#phone').val(reader.phone);
            $('#readerType').val(reader.readerType);
            $('#studentId').val(reader.studentID);
            $('#address').val(reader.address);
            $('#DoB').val(formatDateString(reader.DoB));
            $('#createdDate').val(formatDateString(reader.createdAt));
            $('#expDate').val(formatDateString(reader.expiredAt));
        }
    })
}

$(function() {
    $('#editForm').submit(function() {
        const name = $('#name').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const readerType = $('#readerType').val();
        const DoB = $('#DoB').val();
        const studentId = $('#studentId').val();
        const address = $('#address').val();
        return false;
    })
})

$(function() {
    const url = window.location.search;
    const queryStr = new URLSearchParams(url);
    const id = parseInt(queryStr.get('id'));
    renderReader(id);
})