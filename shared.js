var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var modalNoButton = document.querySelector('.modal__action.modal__action--negative');

backdrop.addEventListener('click', function () {
    mobileNav.classList.remove('open');
    hideModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', hideModal);
}

function hideModal() {
    backdrop.classList.remove('open');
    modal && modal.classList.remove('open');
}

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

toggleButton.addEventListener('click', function () {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});
