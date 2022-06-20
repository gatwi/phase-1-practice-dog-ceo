console.log('%c HI', 'color: firebrick')

var breeds = [];

document.addEventListener('DOMContentLoaded', function () {
    loadImages();
    loadBreedOptions();
});

function loadImages () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(res=> res.json())
    .then(results => {
        results.message.forEach(image => addImage(image))
    });
}

function addImage(dogPicUrl1) {
    let container = document.querySelector('#dog-image-cpntainer');
    let newImageE1 = document.createElement('img');
    newImageE1.src = dogPicUrl1;
    container.appendChild(newImagesE1);
}