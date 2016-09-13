module.exports = function(bot) {
  bot.hear(/joke/, function(res) {
    // res is a parameter
    return res.send("Feeling funny today, eh?! Knock knock...");
  });
};

// Knock knock, (who's there?), Answer, (answer who), Punchline

// Joke array
// Answer array
// Punchline array

// Listen for "Tell me a joke"
// Respond with random joke from array ("Knock knock")
// Listen for Answer ("who's there?")
// Respond with part 2
// Listen for Response + "who?"
// Respond with answer
