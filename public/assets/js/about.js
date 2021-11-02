
const prettySelects = document.querySelectorAll('.select-group');
const showAll = document.querySelector('.team .show-all');
const burger = document.querySelector('header .burger');
const menu = document.querySelector('header ul');

prettySelects.forEach(select => {
    select.addEventListener('click', (e) => {
        if (e.currentTarget.querySelector('.screen').classList.contains('predefined')) return;
        toggleActive(e.currentTarget);
        applySelectedValue(e);
    }, {passive: true});
});

showAll.addEventListener('click', (e) => {showAllTeam(e)});
burger.addEventListener('click', () => {toggleActive(menu)}, {passive: true});

function toggleActive(elem) {
    elem.classList.toggle('active');
}

function applySelectedValue(e) {
    const element = e.target.closest('.pretty-option');

    if (element != null) {
        if (typeof element.dataset.value != 'undefined') {
            e.currentTarget.querySelector('select').value = element.dataset.value;
            e.currentTarget.querySelector('.screen').innerHTML = element.innerHTML;
        }
    }
}

function showAllTeam(e) {
    e.preventDefault();
    showAll.classList.add('hidden');
    document.querySelector('.team .all').classList.add('active');
    document.querySelector('.team .slider').classList.add('hidden');
    document.querySelector('.team .buttons').classList.add('hidden');
}
