// Fetch a new word of the day from your backend API
function fetchWordOfTheDay() {
    // Code to fetch data from your backend API
    // Example: return fetch('your-api-url').then(response => response.json());
    return Promise.resolve({
        word: "KoreanWord",
        definition: "Definition in English",
        example: "Example sentence in German"
    });
}

// Display the word of the day on the webpage
function displayWordOfTheDay(wordData) {
    document.getElementById('word').textContent = wordData.word;
    document.getElementById('definition').textContent = "Definition: " + wordData.definition;
    document.getElementById('example').textContent = "Example (German): " + wordData.example;
}

// Event listener for the Next Word button
document.getElementById('nextButton').addEventListener('click', () => {
    fetchWordOfTheDay().then(wordData => {
        displayWordOfTheDay(wordData);
    });
});

// Fetch and display the word of the day when the page loads
window.onload = () => {
    fetchWordOfTheDay().then(wordData => {
        displayWordOfTheDay(wordData);
    });
};
