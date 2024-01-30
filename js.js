window.onload = function() {
    var audioElement = document.getElementById('myAudio');
    var activateButton = document.getElementById('activateSoundButton');
    var deactivateButton = document.getElementById('deactivateSoundButton');

    activateButton.addEventListener('click', function() {
        audioElement.play();
    });

    deactivateButton.addEventListener('click', function() {
        audioElement.pause();
    });

    // Haz que las imágenes se vean un poco más grandes al hacer clic
    var images = document.querySelectorAll('.imagen-izquierda, .imagen-derecha');
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            image.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseleave', function() {
            image.style.transform = 'scale(1)';
        });
    });
}
