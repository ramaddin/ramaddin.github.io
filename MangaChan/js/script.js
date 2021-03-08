


$(function () {
    $('#video-button').click(function () {
        let about = $('.modal');

        if(about.css('display') === 'none') {
            about.css('display', 'block');
        } else {
            about.css('display', 'none');
        }

    });

    $('.modal-close').click(function(){
        $('.modal').css('display', 'none');
    })
});




const button = document.getElementById("btn")

const colors = ["#FF5733", "#F9FF33", "#3371FF", "red", "green", "black", "rgb(85, 255, 51)"]

button.addEventListener("click", () => {
    document.body.style.backgroundColor = colors[getRandomNumber()]
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}