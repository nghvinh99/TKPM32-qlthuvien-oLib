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