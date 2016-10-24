var key = require('../utils/key');
var sync = require('synchronize');
var request = require('request');
var _ = require('underscore');


// The API that returns the in-email representation.
module.exports = function(req, res) {
  var url = req.query.url.trim();

  // Giphy image urls are in the format:
  // http://giphy.com/gifs/<seo-text>-<alphanumeric id>
  var matches = url.match(/\-([a-zA-Z0-9]+)$/);
  if (!matches) {
    res.status(400).send('Invalid URL format');
    return;
  }

  var id = matches[1];

  var response;
  try {
    response = sync.await(request({
      url: 'http://api.smmry.com/&SM_API_KEY=4B16738EE9&SM_LENGTH=3&SM_WITH_BREAK&SM_URL=http://www.reuters.com/article/' + encodeURIComponent(id),
      qs: {
        api_key: key
      },
      gzip: true,
      json: true,
      timeout: 15 * 1000
    }, sync.defer()));
  } catch (e) {
    res.status(500).send('Error');
    return;
  }

  var title = response.body.sm_api_title;
  var body = response.body.sm_api_content;
  var body = body.replace(/\[BREAK\]/g,'</br></br>');
  var html = '<h2>' + title + '</h2>' + '<p>' + body + '</p>' + '<a href=' + url + '>' + 'View Original Article' + '</a>';
  res.json({
    body: html
    // Add raw:true if you're returning content that you want the user to be able to edit
  });
};