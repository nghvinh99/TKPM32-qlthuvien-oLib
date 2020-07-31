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