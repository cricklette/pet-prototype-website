document.addEventListener('DOMContentLoaded', () => {
    const keyTerms = {
        cats: ["cats", "cat", "kittens", "kitten", "feline"],
        dogs: ["dogs", "dog", "puppies", "activity"],
        birds: ["birds", "bird", "parrot", "parrots"],
        contact: ["contact", "contact us", "contact information", "schedule", "appointment"],
    };

    var searchButton = document.getElementById('searchbtn');
    var searchInput = document.getElementById('searchinput');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        let found = false;
        let category = '';

        for (const currentCategory in keyTerms) {
            if (keyTerms[currentCategory].some(term => term.toLowerCase() === searchTerm)) {
                category = currentCategory;
                found = true;
                break;
            }
        }
        if (found) {
            window.location.href = `${category}.html`;
        } else {
            console.log('Invalid query');
        }
        searchInput.value = ''; 
    });
});
