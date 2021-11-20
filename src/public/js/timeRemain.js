function timeRemainToday(){
    let countDownDate = new Date(2021, 11, 06).getTime();
    let x = setInterval(function() {
        
        let now = new Date().getTime();
        let distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        $('body').find('.cmsn__time-remain').html(days + " Ngày " + hours + " Giờ " + minutes + " Phút " + seconds + " Giây");

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            $('body').find('.cmsn__time-remain').html("Chúc Mừng Sinh Nhật Tuổi 21!");
        }
    }, 1000);
}

function getDetail(){
    let Do = moment(new Date(2021, 11, 06)).format('dddd, DD-MM-YYYY');
    $('body').find('.detail').text(Do);
}