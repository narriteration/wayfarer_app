var db = require("./models");


var UserList =[];
UserList.push({
              userName: 'NamelessProfit',
              password: 'namelessprofit',
              currentCity: 'San Francisco'
            });
UserList.push({
              userName: 'Carlitos',
              password: 'carlitos',
              currentCity: 'Paris'
            });
UserList.push({
            userName: 'Ash',
            password: 'ash',
            currentCity: 'New York'
            });
UserList.push({
            userName: 'Sasha',
            password: 'sasha',
            currentCity: 'Seattle'
});

db.User.remove({}, function(err, users){
    if (err) {
      console.log(err);
    }
    console.log('users', users)
    db.User.create(UserList, function(err, users){
        if (err) { return console.log('ERROR', err); }
        console.log("all users:", users);
        console.log("created", users.length, "users");
        process.exit();
    });
});
