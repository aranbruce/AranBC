const shareIcon = document.querySelector('.share-icon');

//Hide share butotn if not supported
if (!navigator.share) {
    shareIcon.style.display = "none";
}

// Add share functionality
if (shareIcon) {
    shareIcon.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
        title: 'Aran Bruce-Caddick \'s Website',
        text: 'Check out this great portfolio website',
        url: window.location.href
        }).then(() => {
        console.log('Thanks for sharing!');
        })
        .catch(err => {
        console.log(`Couldn't share because of`, err.message);
        });
    } else {
        console.log('web share not supported');
    }
    });
}