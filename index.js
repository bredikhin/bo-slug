/**
 * Dependencies
 */
var slug = require('slugg');

module.exports.commands = {
  slug: function(args, done) {
    done(null, slug(args.join(' ')));
  }
};
