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

  // Array of puns!
  var puns = [
    "I wondered why the baseball was getting bigger. Then it hit me.",
    "Did you hear about the guy whose whole left side was cut off? He's all right now.",
  	"I wasn't originally going to get a brain transplant, but then I changed my mind.",
    "A friend of mine tried to annoy me with bird puns, but I soon realized that toucan play at that game.",
    "I'd tell you a chemistry joke but I know I wouldn't get a reaction.",
    "I'm reading a book about anti-gravity. It's impossible to put down.",
    "Did you hear about the guy who got hit in the head with a can of soda? He was lucky it was a soft drink.",
    "Yesterday I accidentally swallowed some food coloring. The doctor says I'm OK, but I feel like I've dyed a little inside.",
    "Have you ever tried to eat a clock? It's very time consuming.",
    "It's not that the man did not know how to juggle, he just didn't have the balls to do it."
  ];

  // Instantiate a listener for "pun"
  // Pick a random joke and send it.
  bot.hear(/pun/i, function(res) {
    var rand = getRandomIntInclusive(1, puns.length - 1);
    res.send(puns[rand]);
    res.finish();
  });

  // Instantiate a listener for "dad joke."
  // If user says "dad joke," send a joke.
  // If user just says "dad," ask if they want to hear a dad joke.
  // Send a dad joke or be sad.
  bot.hear(/dad/i, function(res) {
    if (/dad\s?joke/ig.test(res.message.text)) {
      tellJoke(res);
    } else {
      res.send("Did someone say they want to hear a dad joke?!");
      res.finish();
      conditionalJoke(res.envelope.user, res.message.id);
    };
  });

  // Bot listens for whether user wants to hear a dad joke.
  // Tell joke or be sad.
  function conditionalJoke(user, messageID) {
    bot.listen(
      function(message) {
        return user.id === message.user.id;
      },
      {id: messageID},
      function(response) {
        if (/no/ig.test(response.message.text)) {
          response.send("Awwwwwwwwwwww, you're no fun.");
        } else {
          response.send("Good, that's what I hoped you'd say.")
          setTimeout(function() {tellJoke(response)}, 3000);
        }
        removeListener(messageID);
      }
    )
  }

  // Define a random integer less than the length - 1 of the jokes array.
  // Send a random joke.
  // Send corresponding answer.
  function tellJoke(res) {
    var rand = getRandomIntInclusive(1, jokes.length - 1);
    res.send(jokes[rand]);
    res.finish();
    jokeAnswer(res.envelope.user, answers[rand], res.message.id);
  }

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

  // Get a random integer that will be used to find a random joke or pun.
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
