// Utility function to hide all sections
function hideAllSections() {
    const sections = document.querySelectorAll('.section-container');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
}

// Function to show the welcome section
function goBackToWelcome() {
    hideAllSections();
    document.querySelector('.welcome-container').classList.remove('hidden');
}

// Function to show the customer pictures section
function showCustomerPics() {
    hideAllSections();
    document.querySelector('.customer-container').classList.remove('hidden');
}

// Function to show the drinks section
function showDrinks() {
    hideAllSections();
    document.querySelector('.drinks-container').classList.remove('hidden');
}

// Function to show the food (waffles) section
function showFood() {
    hideAllSections();
    document.querySelector('.food-container').classList.remove('hidden');
}

// Function to show the gallery section
function showGallery() {
    hideAllSections();
    document.querySelector('.gallery-container').classList.remove('hidden');
}

// Function to go back to the customer pictures section from drinks
function goBackToCustomerPics() {
    hideAllSections();
    document.querySelector('.customer-container').classList.remove('hidden');
}

// Function to go back to the drinks section from food
function goBackToDrinks() {
    hideAllSections();
    document.querySelector('.drinks-container').classList.remove('hidden');
}

// Function to go back to gallery section
function goBackToGallery() {
    hideAllSections();
    document.querySelector('.gallery-container').classList.remove('hidden');
}
