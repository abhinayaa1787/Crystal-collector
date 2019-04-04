$(document).ready(function () {
    var randomNumber = Math.floor((Math.random() * 120) + 19);

    console.log(randomNumber);

    var scoreCounter = 0;
    var win = 0;
    var loss = 0;
    $("#randomNumber").html(randomNumber);
    
    function scoreCheck(scoreCounter) {
         console.log("your score is:"+scoreCounter);
        //  console.log("random number is:"+randomNumber);
        if (scoreCounter==randomNumber) {
            win++;
            $("#win").html("Wins:" + win);
            console.log("equal,you won!");
            // $("#scoreCounter").text("0");
        location.reload();
            


        }
        else {
            if (scoreCounter > randomNumber) {
                loss++;
                $("#loss").html("Losses:"+ loss);
                console.log("You loss"+ loss);
                //  $("#scoreCounter").text("0");
                 location.reload();

            }
        }
    };
    $(".btn").click(function () {
        var crystalNumber = Math.floor((Math.random() * 12) + 1);
        console.log("click" + crystalNumber);
        console.log(scoreCounter);
        scoreCounter += crystalNumber;
        console.log("score" + scoreCounter);
        $("#scoreCounter").text(scoreCounter);
        scoreCheck(scoreCounter);



    });
    // $("#blueCrystal").click(function () {
    //     var crystalNumber = Math.floor((Math.random() * 12) + 1);
    //     console.log("blueclick" + crystalNumber);
    //     scoreCounter += crystalNumber;
    //     console.log("score" + scoreCounter);
    //     $("#scoreCounter").html(scoreCounter);
    //     scoreCheck(scoreCounter);
    //     console.log("calling");

    // });

    // $("#greenCrystal").click(function () {
    //     var crystalNumber = Math.floor((Math.random() * 12) + 1);
    //     console.log("greenclick" + crystalNumber);
    //     scoreCounter += crystalNumber;
    //     console.log("score" + scoreCounter);
    //     $("#scoreCounter").html(scoreCounter);
    //     scoreCheck(scoreCounter);
    //     console.log("calling");




    // });

    // $("#yellowCrystal").click(function () {
    //     var crystalNumber = Math.floor((Math.random() * 12) + 1);

    //     console.log("yellowclick" + crystalNumber);
    //     scoreCounter += crystalNumber;
    //     console.log("score" + scoreCounter);
    //     $("#scoreCounter").html(scoreCounter);
    //     scoreCheck(scoreCounter);
    //     console.log("calling");




    // });



    // $.fn.scoreCount = function(crystalNumber){ 
    //     $("#scoreCounter").text(crystalNumber);
    //     scoreCounter+=crystalNumber;
    //     console.log(scoreCounter);
    // // }
    // scoreCount();

}
);


