$(document).ready(() => {

// Button Colors

$('#beginner-button').on('click', () => {
    $('#beginner-button').css("background-color", "rgb(13, 255, 13)").addClass("active");
    $('#intermediate-button').css("background-color", "white").removeClass("active");
    $('#expert-button').css("background-color", "white").removeClass("active");
});

$('#intermediate-button').on('click', () => {
    $('#intermediate-button').css("background-color", "rgb(13, 255, 13)").addClass("active");
    $('#beginner-button').css("background-color", "white").removeClass("active");
    $('#expert-button').css("background-color", "white").removeClass("active");
});

$('#expert-button').on('click', () => {
    $('#expert-button').css("background-color", "rgb(13, 255, 13)").addClass("active");
    $('#intermediate-button').css("background-color", "white").removeClass("active");
    $('#beginner-button').css("background-color", "white").removeClass("active");
});

// Trick Number Counter

let trickCounter = 0;
$('#generate-trick').on('click', () => {
    if ( $('#beginner-button').hasClass("active")  || 
    $('#intermediate-button').hasClass("active")  || 
    $('#expert-button').hasClass("active") ) {
        $('#generate-trick').hide();
        $('#ollie-audio').trigger('play');
        trickCounter++
        $('#trick-number').html(trickCounter);
        $('#trick-name').show();
    };

// Generate Trick Based On Difficulty

let tricks = [
    ['Ollie', 'Nollie', 'Kickflip', 'Pop Shove It', 'Frontside 180', 
    'Backside 180', 'Shove It', 'Frontside Pop Shove It', 'Heelflip'] , 
    
    ['Kickflip', 'Pop Shove It', 'Frontside 180', 'Backside 180', 'Shove It', 
    'Frontside Pop Shove It', 'Heelflip', 'Varial Kickflip', 'Hard Flip', 
    'Varial Heelflip', 'Inward Heelflip', 'Backside 180 Kickflip', 'Fontside 180 Kickflip', 
    'Backside 180 Heelflip', 'Frontside 180 Heelflip'] ,
    
    ['Heelflip', 'Varial Kickflip', 'Hard Flip', 'Varial Heelflip', 'Inward Heelflip', 
    'Backside 180 Kickflip', 'Fontside 180 Kickflip', 'Backside 180 Heelflip', 
    'Frontside 180 Heelflip', '360 Pop Shove It', 'Backside Big Spin', 'Frontside Big Spin', 
    '360 Flip', 'Ollie Impossible', 'Laser Flip', 'Casper Flip', 'Backside Big Spin Kickflip'] 
];

if ( $('#beginner-button').hasClass("active") ) {
    let trickGenerateNumber = Math.floor(Math.random() * (tricks[0].length));
    let begTrick = tricks[0][trickGenerateNumber];
    $('#trick-name').html(begTrick);
} else if ($('#intermediate-button').hasClass("active")) {
    let trickGenerateNumber = Math.floor(Math.random() * (tricks[1].length));
    let intTrick = tricks[1][trickGenerateNumber];
    $('#trick-name').html(intTrick);
} else if ($('#expert-button').hasClass("active")) {
    let trickGenerateNumber = Math.floor(Math.random() * (tricks[2].length));
    let expTrick = tricks[2][trickGenerateNumber];
    $('#trick-name').html(expTrick);
}
});

// Yes Button

let scoreCounter = 0;
$('#yes-button').on('click', () => {
    if (totalCounter < trickCounter) {
    scoreCounter++;
    $('#score-counter').html(scoreCounter);
    $('#cheer-audio').trigger('play');
    }
})

// No Button

$('#no-button').on('click', () => {
    if (totalCounter < trickCounter) {
        $('#boo-audio').trigger('play');
    }
})

//Yes Or No Button

let totalCounter = 0;
$('.yes-no-button').on('click', () => {
    if (totalCounter < trickCounter) {
        totalCounter++;
        $('#trick-name').html('');
        $('#total-counter').html(totalCounter);
        $('#generate-trick').show();
        $('#trick-name').hide();
    }

// Reload Page When Game Is Over

    if (totalCounter > 9) {
        location.reload(true);
    }
})
});