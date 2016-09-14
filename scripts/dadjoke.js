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

  bot.hear((/dadjoke/i || /dad joke/i), function(res) {
    var rand = getRandomIntInclusive(1, jokes.length - 1);

    res.send(jokes[rand]);

    setTimeout(function() {
      return res.send(answers[rand]);
    }, 10000);
  });


  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
