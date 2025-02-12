document.addEventListener('DOMContentLoaded', () => {
    const keyTerms = {
        cats: ["cats", "cat", "kittens", "kitten", "feline"],
        dogs: ["dogs", "dog", "puppies", "activity"],
        birds: ["birds", "bird", "parrot", "parrots"],
        contact: ["contact", "contact us", "contact information", "schedule", "appointment", "hours", "location", "help", "help center", "helpdesk", "support", "support center", "supportdesk", "contact support", "contact help", "contact help center", "contact support center", "contact supportdesk", "contact helpdesk", "contact contact", "contact contact us", "contact hours", "contact location", "contact appointment", "contact schedule"],
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
