
// const openPopupButton = document.getElementById('alertButton'); // Change to match HTML button ID
// const popup = document.getElementById('popup');

// openPopupButton.addEventListener('click', function () {
//     popup.classList.remove('hidden-popup');
// });


const openPopupButton = document.getElementById('alertButton'); // Change to match HTML button ID
const popup = document.getElementById('popup');
const closePopupButton = popup.querySelector('.close-popup-button'); // Select the close button within the popup

openPopupButton.addEventListener('click', function () {
    popup.classList.remove('hidden-popup');
});

closePopupButton.addEventListener('click', function () {
    popup.classList.add('hidden-popup'); // Hide the popup when close button is clicked
});
