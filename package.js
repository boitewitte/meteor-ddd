Package.describe({
  name: 'boite:ddd',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.1');
    api.use(['ecmascript', 'underscore', 'check']);
    api.addFiles('lib/utils.js');
    api.addFiles(['domain/repository.js','domain/base.js', 'domain/expose.js', 'domain/export.js']);
    /*api.addFiles('domain.js');
    api.addFiles('entity.js');
    api.addFiles('aggregate.js');*/
    api.export('DDD');
});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use(['tinytest', 'underscore', 'ejson']);
    api.use('boite:ddd');
    //api.addFiles(['tests/entity.js','tests/aggregate.js']);
    api.addFiles(['tests/domain.js', 'tests/subdomain.js']);
});
