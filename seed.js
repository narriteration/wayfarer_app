var db = require("./models");
//var locations = require("./locations");


// var UserList = [{
//     userName: 'NamelessProfit',
//     password: 'namelessprofit',
//     currentCity: 'San Francisco'
// }, {
//     userName: 'Carlitos',
//     password: 'carlitos',
//     currentCity: 'Paris'
// }, {
//     userName: 'Ash',
//     password: 'ash',
//     currentCity: 'New York'
// }, {
//     userName: 'Sasha',
//     password: 'sasha',
//     currentCity: 'Seattle'
// }];

var LocationList = [];
  LocationList.push(
  {
    "City": "Tokyo",
    "Country": "Japan"
  });
  LocationList.push(
  {
    "City": "Jakarta",
    "Country": "Indonesia"
  });
  LocationList.push(
  {
    "City": "Seoul",
    "Country": "South Korea"
  });



// db.User.remove({}, function(err, users) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('users', users)
//
//     db.User.create(UserList, function(err, users) {
//         if (err) {
//             return console.log('ERROR', err);
//         }
//         console.log("all users:", users);
//         console.log("created", users.length, "users");
//         process.exit();
//     });
// });


db.Location.remove({}, function(err, locations){
    if (err) {
      console.log(err);
    }
    console.log('locations: ', locations )
    db.Location.create(LocationList, function(err, locations){
        if (err) { return console.log('ERROR', err); }
        console.log("all locations:", locations);
        console.log("created", locations.length, "users");
        process.exit();
    });
});
