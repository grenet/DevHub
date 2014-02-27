var fs = require('fs');
exports.post = function(req, res) {
  var tmp_path = req.files.file.path;
  var file_name = req.files.file.name.replace(/ /g,'_');
  var target_path = './static/uploads/' + file_name;
  var access_path = '/uploads/' + file_name;

  fs.rename(tmp_path, target_path, function(err) {
    if (err) {
      throw err;
    }
    fs.unlink(tmp_path, function() {
      if (err) {
        throw err;
      }
      res.send({fileName: access_path});
    });
  });
};
