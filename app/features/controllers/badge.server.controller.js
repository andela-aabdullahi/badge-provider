var User = require('mongoose').model('Badge');
exports.create = function(req, res, next) {
  var user = new User(req.body);
  user.save(function(err) {
    if (err) {
      return next(err);
    } else {
      res.json({
        User:"Erned one badge",
        Success:"Badge "+"\\"+user.badge_title +"\\"+" Created Successfully",
        Badge_data:[user],
        Owner: req.body.username
  
      });
    }
  });
};

exports.list = function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) {
      return next(err);
    } else {
      res.json(users);
    }
  });
};

exports.read = function(req, res) {
  res.json(req.user);
};
exports.userByID = function(req, res, next, id) {
  User.findOne({
    _id: id
  }, function(err, user) {
    if (err) {
      return next(err);
    } else {
      req.user = user;
      next();
    }
  });
};

exports.update = function(req, res, next) {
  User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
    if (err) {
      res.json({Error:"Cannot update user"});
      return next(err);
    } else {
      res.json(user);
    }
  });
};

exports.delete = function(req, res, next) {
  req.user.remove(function(err) {
    if (err) {
      return next(err);
    } else {
      res.json({Success:"Badge deleted susccessfully"});
    }
  });
};


