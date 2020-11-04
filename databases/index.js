const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("we're connected!")
});

let schema = new mongoose.Schema({
  // TODO: your schema here!
})

// let Repo = mongoose.model('Repo', repoSchema);

// let save = (repos) => {
//   // if (err) return console.log(err);
//   // console.log(Repo)
//   // TODO: Your code here
//   // This function should save a repo or repos to
//   // the MongoDB
//   let newCols = [];
//   //for each repo in the array, pull out the info we want to put in the database
//   for (let i = 0; i < repos.length; i++) {
//     let repo = repos[i];
//     console.log("repo owner is ", repo.owner);
//     let col = new Repo({
//       id: id,
//       name: name
//       forks: forks,
//       url: repo.git_url
//     });
//     newCols.push(col);
//     col.save((err, request) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("hooray I just added ", request);
//     }
//   });
// }}

module.exports.save = save;