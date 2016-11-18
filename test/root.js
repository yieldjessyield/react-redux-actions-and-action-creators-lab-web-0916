const expect = require('expect');

const jsdom = require('jsdom');
const path = require('path');
const { transformFileSync } = require('babel-core');

const fs = require('fs');

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'));
global.document = jsdom.jsdom(html);
global.window = document.defaultView;

before(function(done) {
  const src = path.resolve(__dirname, '..', './src/index.js');
  const babelResult = transformFileSync(src, {
    presets: ['es2015']
  });
  const html = path.resolve(__dirname, '..', '/index.html');

  jsdom.env(html, [], {
    src: babelResult.code
    // virtualConsole: jsdom.createVirtualConsole().sendTo(console)
  }, (err, window) => {
    if (err) {
      return done(err);
    }

    return done();
  });
});
