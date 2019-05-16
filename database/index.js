const mongoose = require('mongoose');
var faker = require('faker');

var db = mongoose.connect('mongodb://localhost/players');

// db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function () {
//   console.log('We\'re connected to DB!');
// });

var playerSchema = mongoose.Schema({
  id: Number,
  username: String,
  language: Array,
  avatar: String,
  recommended: Boolean,
  allowComments: Boolean,
  review: String
});

var Player = mongoose.model('player', playerSchema);



for (var i = 0; i < 101; i++) {
  var userName = faker.internet.userName();
  var avatar = faker.internet.avatar();
  var language = faker.random.arrayElement(['English', 'Chinese', 'Spanish', 'Italian', 'French', 'German']);
  var recommended = faker.random.boolean();
  var allowComments = faker.random.boolean();
  var review = faker.random.words();

  var player = new Player({
    id: i,
    userName: userName,
    avatar: avatar,
    language: language,
    recommended: recommended,
    allowComments: allowComments,
    review: review
  });
  player.save(player);
}









