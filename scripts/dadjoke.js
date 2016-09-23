module.exports = function(bot) {
  // Array of jokes.
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

  // Array of answers.
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

  // Instantiate a listener for "dad joke."
  // Pick a random joke and send it.
  // Stop first listener.
  // Return answer based on jokeAnswer function.
  bot.hear(/dad\s?joke/i, function(res) {
    var rand = getRandomIntInclusive(1, jokes.length - 1);
    res.send(jokes[rand]);
    res.finish();
    jokeAnswer(res.envelope.user, answers[rand], res.message.id);
  });

  // Instantiate second listener after telling a joke.
  // Ensure bot id is the same as the user's message id.
  // If so (truthy), callback: send answer.
  // Remove listener from bot.listeners array so bot doesn't respond to itself.
  function jokeAnswer(user, answer, messageID) {
    bot.listen(
      function(message) {
        return user.id === message.user.id;
      },
      {id: messageID},
      function(response) {
        response.send(answer);
        removeListener(messageID);
      });
  }

  // Set a unique index on the bot listeners.
  // Remove listener that contains that id.
  function removeListener(id) {
    var index = bot.listeners.findIndex(function(element, index, array){
      return id === element.options["id"];
    });
    bot.listeners.splice(index, 1);
  }

  // Get a random integer that will be used to find a random joke.
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
