var NumberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < NumberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //    audio1 = new Audio("./sounds/tom-1.mp3");
        //    audio1.play();
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "w":
                audio1 = new Audio("./sounds/tom-1.mp3");
                audio1.play();

            case "a":
                audio2 = new Audio("./sounds/tom-2.mp3");
                audio2.play();

            case "s":
                audio3 = new Audio("./sounds/tom-3.mp3");
                audio3.play();
                
            case "d":
                audio4 = new Audio("./sounds/tom-4.mp3");
                audio2.play();

            case "j":
                audio5 = new Audio("./sounds/snare.mp3");
                audio5.play();

            case "k":
                audio6 = new Audio("./sounds/crash.mp3");
                audio6.play();

            case "l":
                audio7 = new Audio("./sounds/kick-bass.mp3");
                audio7.play();
                
            default: console.log(buttonInnerHTML);

        }
            

    });
}


