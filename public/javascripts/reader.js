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
        console.log(readerInfo);
        $.ajax({
            url: '/readers/add',
            type: 'POST',
            dataType: 'json',
            data: readerInfo,
            success: (data) => {
                alert(data);
            }
        })
    })
})