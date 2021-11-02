const burger = document.querySelector('header .burger');
const menu = document.querySelector('header ul');
const prettySelects = document.querySelectorAll('.select-group');
const formStepsNexts = document.querySelectorAll('.quote .next-step');
const formStepsPrevs = document.querySelectorAll('.quote .prev-step');
const vehicleDetails = document.querySelectorAll('.vehicle-details input');

burger.addEventListener('click', () => {toggleActive(menu)}, {passive: true});

prettySelects.forEach(select => {
    select.addEventListener('click', (e) => {
        if (e.currentTarget.querySelector('.screen').classList.contains('predefined')) return;
        toggleActive(e.currentTarget);
        applySelectedValue(e);
    }, {passive: true});
});

formStepsNexts.forEach(step => {
    step.addEventListener('click', (e) => {stepNextHandler(e)}, {passive: true});
});

formStepsPrevs.forEach(step => {
    step.addEventListener('click', (e) => {stepPrevHandler(e)}, {passive: true});
});

vehicleDetails.forEach(input => {
    input.addEventListener('change', vehicleDetailsHandler, {passive: true});
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

function stepNextHandler(e) {
    const currentStep = e.currentTarget.closest('.step');
    const currentStepId = parseInt(currentStep.dataset.step);
    const currentSelector = document.querySelector('.quote .form-steps .step.active');
    const nextStep = document.querySelector('.quote form .step[data-step="'+(currentStepId+1)+'"]');
    const nextSelector = document.querySelector('.quote .form-steps .step[data-step="'+(currentStepId+1)+'"]');

    currentStep.classList.remove('active');
    currentSelector.classList.remove('active');
    nextStep.classList.add('active');
    if (nextSelector) {
        nextSelector.classList.add('active');
    } else {
        lastPage(true);
    }
}

function stepPrevHandler(e) {
    const currentStep = e.currentTarget.closest('.step');
    const currentStepId = parseInt(currentStep.dataset.step);
    const currentSelector = document.querySelector('.quote .form-steps .step.active');
    const nextStep = document.querySelector('.quote form .step[data-step="'+(currentStepId-1)+'"]');
    const nextSelector = document.querySelector('.quote .form-steps .step[data-step="'+(currentStepId-1)+'"]');

    if(currentSelector) {
        currentSelector.classList.remove('active');
    } else {
        lastPage(false);
    }
    currentStep.classList.remove('active');
    nextStep.classList.add('active');
    nextSelector.classList.add('active');
}

function vehicleDetailsHandler() {
    const selectedType = this.id; 
    const vinFormFields = document.querySelectorAll('.form-group.vin');
    const modelFormFields = document.querySelectorAll('.form-group.yearmakemodel');
    const formFields = document.querySelectorAll('.form-group.'+selectedType);

    vinFormFields.forEach(formField => {
        formField.classList.add('hidden');
    });

    modelFormFields.forEach(formField => {
        formField.classList.add('hidden');
    });

    formFields.forEach(formField => {
        formField.classList.remove('hidden');
    });
}

function lastPage(lastPage) {
    const lastPageBlocks = document.querySelectorAll('.last-page');
    const notLastPageBlocks = document.querySelectorAll('.not-last-page');
    if (lastPage) {
        lastPageBlocks.forEach(block => block.classList.remove('hidden'));
        notLastPageBlocks.forEach(block => block.classList.add('hidden'));
    } else {
        lastPageBlocks.forEach(block => block.classList.add('hidden'));
        notLastPageBlocks.forEach(block => block.classList.remove('hidden'));     
    }
}