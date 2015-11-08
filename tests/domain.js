Tinytest.add('Domain - factory', function (test) {
    DDD.Domain('testDomain1', function (domain) {
        test.equal(domain.name, 'TestDomain1');
        test.isFalse(domain.context);
    });
});

Tinytest.add('Domain - usage', function (test) {
    var domain = DDD.Domain('testDomain1');
    test.equal(domain.name, 'TestDomain1');
    test.isFalse(domain.context);
    test.isFalse(domain.Domain);
    test.isFalse(domain.Parent);
});

Tinytest.add('Domain - recreate', function (test) {
    DDD.Domain('testDomain1', function (domain) {
        test.equal(domain.name, 'TestDomain1');
        test.isFalse(domain.context);
    });
});

Tinytest.add('Domain - Capitalized', function (test) {
    DDD.Domain('TestDomain1', function (domain) {
        test.equal(domain.name, 'TestDomain1');
        test.isFalse(domain.context);
    });
});

Tinytest.add('Domain - Capitalized usage', function (test) {
    var domain = DDD.Domain('TestDomain1');
    test.equal(domain.name, 'TestDomain1');
    test.isFalse(domain.context);
    test.isFalse(domain.Domain);
    test.isFalse(domain.Parent);
});