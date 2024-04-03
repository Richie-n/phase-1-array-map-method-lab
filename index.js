const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // Map through each tutorial title
  return tutorials.map(title => {
    // Split the title into an array of words
    const words = title.split(" ");
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    // Join the modified words back into a single string
    return capitalizedWords.join(" ");
  });
};

// Call the titleCased function and store the result in a variable
const titleCasedTutorials = titleCased();

// Log the titleCasedTutorials array to the console
console.log(titleCasedTutorials);
