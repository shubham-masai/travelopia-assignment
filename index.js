
const openPopupButton = document.getElementById('alertButton'); 
const popup = document.getElementById('popup');
const closePopupButton = popup.querySelector('.close-popup-button');  

openPopupButton.addEventListener('click', function () {
    popup.classList.remove('hidden-popup');
});

closePopupButton.addEventListener('click', function () {
    popup.classList.add('hidden-popup'); 
});
