const burger = document.querySelector('header .burger');
const menu = document.querySelector('header ul');
const prettySelects = document.querySelectorAll('.select-group');
const addDriver = document.querySelector('.addDriver');
const editDrivers = document.querySelectorAll('.editDriver');
const addVehicle = document.querySelector('.addVehicle');
const editVehicles = document.querySelectorAll('.editVehicle');

burger.addEventListener('click', () => {toggleActive(menu)}, {passive: true});
if(addDriver) {
    addDriver.addEventListener('click', addDriverHandler, {passive: true});
}
if(addVehicle) {
    addVehicle.addEventListener('click', addVehicleHandler, {passive: true});
}

prettySelects.forEach(select => {
    select.addEventListener('click', (e) => {
        if (e.currentTarget.querySelector('.screen').classList.contains('predefined')) return;
        toggleActive(e.currentTarget);
        applySelectedValue(e);
    }, {passive: true});
});

editDrivers.forEach(button => {
    button.addEventListener('click', (e) => {editDriverHandler(e)}, {passive: true});
});

editVehicles.forEach(button => {
    button.addEventListener('click', (e) => {editVehicleHandler(e)}, {passive: true});
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

function removeActiveFromList(cssPathToList) {
    const list = document.querySelectorAll(cssPathToList);
    list.forEach(item => {
        item.classList.remove('active');
    });
}

function addActive(cssClass) {
    document.querySelector(cssClass).classList.add('active');
}

function addDriverHandler() {
    const editDriverSection = document.querySelector('.edit-vehicle-screen');

    removeActiveFromList('.dashboard .screens .screen'); 
    editDriverSection.classList.add('active');
    editDriverSection.classList.remove('edit');
    editDriverSection.querySelector('h2').innerHTML = 'Add New Driver';

}

function editDriverHandler(e) {
    const driver = e.currentTarget.dataset.driver;
    const editDriverSection = document.querySelector('.edit-driver-screen');

    removeActiveFromList('.dashboard .screens .screen'); 

    editDriverSection.classList.add('active');
    editDriverSection.classList.add('edit');
    editDriverSection.querySelector('.hidden input[name="driver-id"]').value = driver;
    editDriverSection.querySelector('h2').innerHTML = `Driver #${driver}`;
}

function addVehicleHandler() {
    const editVehicleSection = document.querySelector('.edit-vehicle-screen');

    removeActiveFromList('.dashboard .screens .screen'); 
    editVehicleSection.classList.add('active');
    editVehicleSection.classList.remove('edit');
    editVehicleSection.querySelector('h2').innerHTML = 'Add New Veicle';

}

function editVehicleHandler(e) {
    const vehicle = e.currentTarget.dataset.vehicle;
    const editVehicleSection = document.querySelector('.edit-vehicle-screen');

    removeActiveFromList('.dashboard .screens .screen'); 

    editVehicleSection.classList.add('active');
    editVehicleSection.classList.add('edit');
    editVehicleSection.querySelector('.hidden input[name="vehicle-id"]').value = vehicle;
    editVehicleSection.querySelector('h2').innerHTML = `Vehicle #${vehicle}`;
}