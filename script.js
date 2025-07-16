setInterval(drawMatrix, 50);

document.addEventListener("DOMContentLoaded", function() {
        var audio = document.getElementById("page-sound");
        document.body.addEventListener("click", function() {
                audio.play();
        }, { once: true });
});

function showPopup() {
        document.getElementById("custom-popup").style.display = "block";
}

function closePopup() {
        document.getElementById("custom-popup").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("bg-video");

    // Unmute video on first click/tap
    document.body.addEventListener("click", function() {
        video.muted = false;
        video.play();
    }, { once: true });
});