module.exports = function(bot) {
  bot.hear(/test/, function(res) {
      return res.send("Robot is running!");
  });

  bot.hear(/Hello!/, function(res) {
    // res is a parameter
    return res.send("Hi there!");
  });

  bot.respond(/Whatcha doin?/, function(res) {
    return res.send(":dancers: :dancers: all day long.");
  });

  bot.respond(/Hi Hubot! My name is (.*)/i, function(msg) {
    var name;
    name = msg.match[1];

    // note that `msg` is a parameter
    if (name === "Hubot") {
        return msg.send("You're not Hubot--I'm Hubot!");
    } else {
        return msg.reply("Nice to meet you, " + name + "!");
    }
  });

  bot.respond(/add (.*) and (.*)/i, function(msg) {
    var a;
    var b;
    a = Number(msg.match[1]);
    b = Number(msg.match[2]);
    c = a + b;

    return msg.reply(a + " plus " + b + " equals " + c);
  });

  bot.respond(/Is it a (weekend|holiday)\s?\?/i, function(msg){
      var today = new Date();
      msg.reply(((today.getDay() === 0) || (today.getDay() === 6)) ? "YES" : "NO");
  });

  bot.hear(/I did it!/i, function(msg){
      // The i at the end of the expression makes it case insensitive
      msg.send("Congratulations! Good job!");
  });

  bot.respond(/Are you there?/i, function(msg){
      msg.reply('Yes, usually here, and listening.');
  });
};
