// Assume we have a JSON database containing search data
const data = [
    { "title": "Page 1", "content": "This is content for page 1." },
    { "title": "Page 2", "content": "This is content for page 2." },
    { "title": "Page 3", "content": "This is content for page 3." },
    // Add more items as needed
];

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
