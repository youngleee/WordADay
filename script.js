// Define an array of word objects
const words = [
    { word: "Word1", definition: "Definition 1", example: "Example 1" },
    { word: "Word2", definition: "Definition 2", example: "Example 2" },
    { word: "Word3", definition: "Definition 3", example: "Example 3" }
];

// Function to display a random word
function displayRandomWord() {
    // Generate a random index within the range of the words array length
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    // Update the content of the elements with the random word's information
    document.getElementById("word").textContent = randomWord.word;
    document.getElementById("definition").textContent = randomWord.definition;
    document.getElementById("example").textContent = randomWord.example;
}

// Add event listener to the "New Word" button
document.getElementById("newWordBtn").addEventListener("click", displayRandomWord);

// Display a random word when the page loads
displayRandomWord();
