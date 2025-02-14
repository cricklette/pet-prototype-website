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


    
    let currentPage = window.location.pathname.split('/').pop().split('.')[0];
    console.log(currentPage);
    let links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        console.log(link.textContent.toLowerCase());
        if (link.textContent.toLowerCase() == currentPage) {
            link.classList.add('selected');
            console.log(`added selected to ${link.textContent}`);
        }
        else if(link.textContent.toLowerCase() == 'home' && currentPage == 'index') {
            link.classList.add('selected');
        }
        else {
            link.classList.remove('selected');
        }
    });
    

});


// add "selected" class to the link of the current page


