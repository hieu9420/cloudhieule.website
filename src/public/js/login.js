$('.btn-login').on('click', function(e){
    let user = {};
    user.userName = $('input[name="userName"]').val();
    user.pw = $('input[name="pw"]').val();

    let apiLink = $('.api-link').val();

    $.ajax({
        async: false,
        url: apiLink,
        type: 'POST',
        data: {user: user},
        success: function(data){
            console.log(data);
        }
    });
});