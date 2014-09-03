Package.describe({
  summary: "Simple jquery.sparkline package",
  version: "1.3.1",
  git:"https://github.com/rollymaduk/jqsparkline.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use(['jquery','underscore']);
  api.addFiles('sparkline.html','client');
  api.addFiles('lib/jquery.sparkline.js','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rollypolly:sparkline');
  api.addFiles('rollypolly:sparkline-tests.js');
});
