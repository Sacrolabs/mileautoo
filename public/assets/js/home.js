
const prettySelects = document.querySelectorAll('.select-group');
const showAll = document.querySelector('.team .show-all');
const faqs = document.querySelectorAll('.faq .qa .q');
const loadMore = document.querySelector('.faq .load-more');
const burger = document.querySelector('header .burger');
const menu = document.querySelector('header ul');

prettySelects.forEach(select => {
    select.addEventListener('click', (e) => {
        if (e.currentTarget.querySelector('.screen').classList.contains('predefined')) return;
        toggleActive(e.currentTarget);
        applySelectedValue(e);
    }, {passive: true});
});

faqs.forEach(question => {
    question.addEventListener('click', (e) => {
        toggleActive(e.currentTarget.closest('.qa'));
    }, {passive: true});
});

showAll.addEventListener('click', (e) => {showAllTeam(e)});
loadMore.addEventListener('click', (e) => {loadMoreQuestions(e)});
burger.addEventListener('click', () => {toggleActive(menu)}, {passive: true});

new Glider(document.querySelector('.reviews .slider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    draggable: true,
    arrows: {
        prev: '.reviews-prev',
        next: '.reviews-next'
    }
});

new Glider(document.querySelector('.team .slider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    draggable: true,
    arrows: {
        prev: '.team-prev',
        next: '.team-next'
    }
});

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

function loadMoreQuestions(e) {
    e.preventDefault();
    loadMore.classList.add('hidden');
    document.querySelectorAll('.faq .qa.hidden').forEach(question => question.classList.remove('hidden'))
}
