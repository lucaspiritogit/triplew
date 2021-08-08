const sideLinkText = document.querySelectorAll('.sideLinkText');



for (let index = 0; index < sideLinkText.length; index++) {
    sideLinkText[index].addEventListener('click', function(event) {
        sideLinkText[index].classList.toggle('activeSideLinkText');        
    })
};
