// Generated by CoffeeScript 1.9.3
(function() {
  var func_info, func_user, md5;

  func_user = __F('user');

  func_info = __F('info');

  md5 = require('MD5');

  module.exports = function(req, res, next) {
    var p, token, uid;
    if (req.cookies._p) {
      p = req.cookies._p.split(':');
      if (p.length === 2) {
        uid = p[0];
        token = p[1];
        return func_user.getById(uid, function(error, user) {
          if (user.is_block) {
            return next(new Error('您已经被加入本站黑名单。请联系 xinyu198736@gmail.com 恢复账户'));
          } else if (user) {
            if (md5(user.weibo_token) === token) {
              res.locals.user = user;
              return func_info.count({
                target_user_id: user.id,
                is_read: 0
              }, function(error, count) {
                res.locals.unread_count = count;
                return next();
              });
            } else {
              return res.redirect('/user/login?redirect=' + encodeURIComponent(req.url));
            }
          } else {
            return res.redirect('/user/login?redirect=' + encodeURIComponent(req.url));
          }
        });
      } else {
        return res.redirect('/user/login?redirect=' + encodeURIComponent(req.url));
      }
    } else {
      return res.redirect('/user/login?redirect=' + encodeURIComponent(req.url));
    }
  };

}).call(this);
