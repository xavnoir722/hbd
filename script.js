function openEnvelope() {

    const envelope = document.getElementById("envelope");

    const instruction = document.getElementById("instruction");

    const card = document.getElementById("card");

    const music = document.getElementById("birthdayMusic");


    // Open the envelope

    envelope.classList.add("open");

    instruction.style.opacity = "0";


    // Play music

    music.play();


    // Wait for the envelope to open

    setTimeout(function () {

        card.classList.add("open");

    }, 700);

}


function closeCard() {

    const card = document.getElementById("card");

    const envelope = document.getElementById("envelope");

    const instruction = document.getElementById("instruction");

    const music = document.getElementById("birthdayMusic");


    // Close the card

    card.classList.remove("open");

    card.classList.add("closing");


    // Stop the music

    music.pause();

    music.currentTime = 0;


    // Wait for the closing animation

    setTimeout(function () {

        card.classList.remove("closing");

        envelope.classList.remove("open");

        instruction.style.opacity = "1";

    }, 1000);

}