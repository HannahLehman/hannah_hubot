module.exports = function(bot) {
  var jokes = [
    "Why can't you hear a pterodactyl go to the bathroom?",
    "How do you cook toilet paper?",
    "Why was the broom late for work?",
    "Why did the IPA beat the Pale Ale at Basketball?",
    "Why did the mermaid wear sea shells?",
    "Did you hear about the two antennas that got married?",
    "What did one wall say to the other wall?",
    "Two peanuts were walking down the street...",
    "A horse walks into a bar and the bartender says, \"Why the long face?\"",
    "What is black and white and black and white and black and white and black and white?",
    "How come a man driving a train got struck by lightning?"
  ];

  var answers = [
    "The \"p\" is silent.",
    "It's easy, you just brown it and then you throw it in the pot.",
    "It overswept.",
    "Because it had more HOPS!",
    "She grew out of her B-Shells.",
    "The ceremony was terrible but the reception was amazing.",
    "Let's, uh, meet up in the corner.",
    "One was assaulted.",
    "And the horse says, \"I'm finally realizing that my alcoholism is driving my family apart.\"",
    "A penguin, rolling down a hill.",
    "He was a good conductor."
  ];

  var rand = getRandomIntInclusive(1, jokes.length - 1);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  bot.hear(/dadjoke/, function(res) {
    // res is a parameter
    return res.send(jokes[rand]);
  });
};

// Why can't you hear a pterodactyl go to the bathroom?
// "The "p" is silent.",

// How do you cook toilet paper?
// "It's easy, you just brown it and then you throw it in the pot.",

// Why was the broom late for work?
// "It overswept.",

// Why did the IPA beat the Pale Ale at Basketball?
// "Because it had more HOPS!",

// Why did the mermaid wear sea shells?
// "She grew out of her B-Shells.",

// Did you hear about the two antennas that got married?
// "The ceremony was terrible but the reception was amazing.",

// What did one wall say to the other wall?
// "Let's, uh, meet up in the corner.",

// Two peanuts were walking down the street...
// "One was assaulted.",

// A horse walks into a bar and the bartender says, "Why the long face?"
// "And the horse says, "I'm finally realizing that my alcoholism is driving my family apart."",

// What is black and white and black and white and black and white and black and white?
// "A penguin, rolling down a hill.",

// How come a man driving a train got struck by lightning?
// "He was a good conductor.",
