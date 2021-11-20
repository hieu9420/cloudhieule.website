let randomFunc = function(){
    let getRandom = function(){
        // let max = 100;
        // let number = Math.floor(Math.random() * (max + 1));
        // let text = number%2 == 0 ? 'Chẵn' : 'lẻ';

        const array = ["Chẵn", "Lẻ", "CC", "BB"];
        const random = array[Math.floor(Math.random() * array.length)];


        $('.text-result').html('');
        $('.num-result').html('').html(`<h1>${random}</h1>`);


    }
    return{
        getRandom,
    }
}();

$('.btn-random').on('click', function(e){
    randomFunc.getRandom();
});