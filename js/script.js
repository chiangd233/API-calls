$('.crypto').on('submit', (e) => {
    e.preventDefault();
    const userInput = $(`input[type="text"]`).val();
    $.ajax({
        url: "http://api.coincap.io/v2/assets",
    }).then(
        (cryptoData) => {
            $('#name').html(cryptoData[0].name);
            $('#symbol').html(cryptoData[0].symbol);
            $('#rank').html(cryptoData[0].rank);
            $('#price').html(cryptoData[0].priceUsd);
        },
        (error) => {
            console.log('bad request: ', error);
        }
    );
})

$('.random').on('submit', (e) => {
    e.preventDefault();
    const random = Math.floor(Math.random() * 100);
    $.ajax({
        url: "http://foodish-api.herokuapp.com/",
    }).then(
        (foodData) => {
            $('#image').html(`<img src=`+ foodData[random].img + `>`);
        },
        (error) => {
            console.log('bad request: ', error);
        }
    )
})