// Assume we have a JSON database containing search data
let data = [];

fetch('database.json')
    .then(response => response.json())
    .then(json => data = json)
    .catch(err => console.error("Database load error:", err));


// Functionality to search through the JSON data
function search(query) {
    const results = data.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.content.toLowerCase().includes(query.toLowerCase())
    );
    displayResults(results);
}

// Function to display the search results
function displayResults(results) {
    const resultContainer = document.getElementById('results');
    resultContainer.innerHTML = ''; // Clear previous results
    results.forEach(result => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${result.title}</h3><p>${result.content}</p>`;
        resultContainer.appendChild(div);
    });
}

// Event listener for the search input
document.getElementById('searchInput').addEventListener('input', (event) => {
    search(event.target.value);
});
