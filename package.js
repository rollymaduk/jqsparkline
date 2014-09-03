Package.describe({
  summary: "Simple jquery.sparkline package",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles('./lib/jquery.sparkline.min.js','client');
  
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rollypolly:sparkline');
  api.addFiles('rollypolly:sparkline-tests.js');
});
