// VARIABLE DECLARATIONS
var customName;  // Variable for the name field
var randomize;   // Variable for the button
var story;       // Variable for the paragraph that outputs the final story

var storyText =
  'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// Create three arrays
var insertX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];

// FUNCTIONS
// Function to get a random value from an array
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate the result
function result() {
    var newStory = storyText;  // Create a new variable to store the modified story

    // Generate random values for xItem, yItem, and zItem
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    // Replace placeholders in the newStory string
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    // If a custom name is provided, replace 'Bob' with the custom name
    customName = document.getElementById('customname').value;
    if (customName !== '') {
        newStory = newStory.replace('Bob', customName);
    }

    // If the metric radio button is checked, convert temperature and weight
    if (document.getElementById('metric').checked) {
        // Convert weight from pounds to kilograms (1lb = 0.453592kg)
        var weight = 300 * 0.453592;
        newStory = newStory.replace('300 pounds', weight.toFixed(2) + ' kilograms');

        // Convert temperature from Fahrenheit to Celsius
        var temp = ((94 - 32) * 5/9).toFixed(2);
        newStory = newStory.replace('94 farenheit', temp + ' Celsius');
    }

    // Update the textContent property of the story paragraph
    story.textContent = newStory;

    // Make the paragraph visible
    story.style.visibility = 'visible';
}

// EVENT LISTENERS
// Add a click event listener to the randomize button
randomize = document.querySelector('.randomize');
story = document.querySelector('.story');
randomize.addEventListener('click', result);
