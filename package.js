Package.describe({
  name: "gildasg:numeral-languages",
  summary: "Languages files for Numeral.js. See http://numeraljs.com.",
  version: "2.8.1",
  git: "https://github.com/djhi/meteor-numeral-languages.git",
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];
  
  api.add_files('lib/numeral/languages.js', 'client');
});

if (Package.on_test) {
  Package.on_test(function (api) {
    if (Package.onTest) {
      api.use([ 'tinytest', 'test-helpers'], ['client', 'server']);
    } else {
      api.use(['tinytest', 'test-helpers'], ['client', 'server']);
    }
  });
}
