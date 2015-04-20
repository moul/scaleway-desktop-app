var NwBuilder = require('node-webkit-builder');

var nw = new NwBuilder({
  files: './src/**',
  platforms: ['osx64'],
  macIcns: './assets/Scaleway.icns',
  macZip: true,
  macPlist: {
    NSHumanReadableCopyright: 'Copyright © 2015 github.com/moul',
    CFBundleIdendifier: 'com.github.moul.scaleway-desktop-app'
  }
});

nw.on('log', console.log);

nw.build()
  .then(function() {
    console.log('Build complete');
  })
  .catch(function(err) {
    console.error(err);
  });
