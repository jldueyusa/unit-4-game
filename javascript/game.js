// build a game with 4 crystals
//Every crystal needs to have a random number between 1-12

//when clicking any crystal, it should be adding with the previous result
//until it equals the random result
//if it is greater than the random result, we decrement a lost counter
//if it is equal, then we increment a win counter
//a new random number should be generated every single time we win or lose
//to those 4 crystals


//set global variables
var random_result;
var lost = 0;
var win = 0;
var previous = 0;



var resetAndStart = function () {
    $(".crystals").empty();

    random_result = Math.floor(Math.random() * 69) + 30; //random number cannot start less than 30 for addition purposes
    //console.log(random_result)

    $("#result").html('Random Number Is: ' + random_result);
    for (var i = 0; i < 4; i++) {


        var random = Math.floor(Math.random() * 11) + 1; //should not start from 0 should start from 1
        //console.log(random);

        var crystal = $("<div>");

        crystal.attr({
            "class": 'crystal',
            "data-random": random
        })

        $(".crystals").append(crystal);
    }

    $("#previous").html("Total Score: " + previous);
}

resetAndStart();

//event delegation
$(document).on('click', ".crystal", function () { //new element on the DOM listen to it


    var num = parseInt($(this).attr('data-random'));
    previous += num;
    $("#previous").html("Total Score: " + previous);

    if (previous > random_result) {
        lost++;
        $("#lost").html("You Lost " + lost);
        previous = 0;

       

        resetAndStart();
    }
    else if (previous === random_result) {
        win++;
        $("#win").html("You Win " + win);

      

        previous = 0;
        resetAndStart();
    }




});