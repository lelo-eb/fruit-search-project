const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry',
    'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant',
    'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson',
    'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig',
    'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry',
    'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry',
    'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee',
    'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew',
    'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive',
    'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit',
    'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple',
    'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan',
    'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry',
    'Tamarillo', 'Tamarind', 'Yuzu'
];

function search(str) {
    let results = [];

    results = fruit.filter(fruitName =>
        fruitName.toLowerCase().includes(str.toLowerCase())
    );

    return results;
}

function searchHandler(e) {
    const suggestions = document.querySelector('.suggestions');
    suggestions.style.display = 'block';
    const inputVal = e.target.value.trim();
    const results = search(inputVal);
    showSuggestions(results, inputVal);
}

function showSuggestions(results) {
    let dropdown = document.querySelector('.suggestions');
    dropdown.innerHTML = '';

        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            dropdown.appendChild(li);
        });
}

function useSuggestion(e) {
    if (e.target.tagName === 'LI') {
        const selectedSuggestion = e.target.textContent;
        input.value = selectedSuggestion;
        suggestions.style.display = 'none';
    }
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
