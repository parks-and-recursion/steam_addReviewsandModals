const mongoose = require('mongoose');
var faker = require('faker');

mongoose.connect('mongodb://localhost/players', {
  useNewUrlParser: true
});

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

// var files = [];

// for (var i = 0; i < 100; i++) {
//   var userName = faker.internet.userName();
//   var avatar = faker.internet.avatar();
//   var language = faker.random.arrayElement([
//     'English',
//     'Chinese',
//     'Spanish',
//     'Italian',
//     'French',
//     'German'
//   ]);
//   var recommended = faker.random.boolean();
//   var allowComments = faker.random.boolean();
//   var review = faker.random.words();

//   var player = new Player({
//     id: i,
//     userName: userName,
//     avatar: avatar,
//     language: language,
//     recommended: recommended,
//     allowComments: allowComments,
//     review: review
//   });
//   files.push(player.save(player));
// }

// Promise.all(files).then(function() {
//   mongoose.connection.close();
// });

var allPlayers = callback => {
  Player.find((err, docs) => {
    if (err) {
      console.log('Error getting data from DB:', err);
    } else {
      callback(null, docs);
    }
  }).limit(100);
};

var postReview = review => {
  var player = new Player(review);
  player.save(err => {
    if (err) {
      console.log('An error has occured posting to DB', err);
    } else {
      console.log(player);
      res.send(201, player);
    }
  });
};

module.exports.allPlayers = allPlayers;
module.exports.postReview = postReview;
