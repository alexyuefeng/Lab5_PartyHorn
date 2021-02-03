//variables
var volume =100;

//trigger events
document.getElementById("volume-number").addEventListener("input", inputVol);
document.getElementById("volume-slider").addEventListener("input", slideVol);


//type of sounds//
function airhorn(){
    document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
    document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
}

function carhorn(){
    document.getElementById("sound-image").src = "./assets/media/images/car.svg";
    document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
}

function partyhorn(){
    document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
    document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
}


//play sound
var radios = document.forms['party-horn-form'].elements['radio-sound'];
for(radio in radios){
    radios[radio].onclick = function(){
        if(this.id == "radio-air-horn")
            airhorn();
        else if(this.id == "radio-car-horn")
            carhorn();
        else if(this.id == "radio-party-horn")
            partyhorn();
    }
}
var f = document.getElementById("party-horn-form");
f.addEventListener("submit", playSound)


function playSound(){
    var horn = document.getElementById("horn-sound");
    horn.volume = (volume/100);
    horn.play();
    alert("Thank you~");
}




// volume section below //
function setVol(){
    document.getElementById("volume-number").value = volume;
    document.getElementById("volume-slider").value = volume;
    volIcon();
}

function inputVol(){
    volume = document.getElementById("volume-number").value;
    setVol();
}

function slideVol(){
    volume = document.getElementById("volume-slider").value;
    setVol();
}

function volIcon(){
    document.getElementById("honk-btn").disabled = false;
    if(volume==0){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }
    else if(volume >0 && volume <=33)
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
    else if(volume>33 && volume <=66)
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
    else
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
}
