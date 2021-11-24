$('.btn-login').on('click', function(e){
    
    let user = {};
    let email = $('input[name="email"]').val();
    let pw = $('input[name="pw"]').val();

    let apiLink = $('.api-link').val();

    $.ajax({
        async: false,
        url: apiLink,
        type: 'POST',
        data: {email, pw},
        success: function(data){
            setCookie('jwt', data.jwt, 1);
            setTimeout(() => {
                window.location.href = '/';
            }, 3000);
            Toasts.fire({
                type: 'success',
                title: data.message,
                timer: 3000
            });
        }
    });
});

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }