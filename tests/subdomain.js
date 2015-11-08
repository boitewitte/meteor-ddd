Tinytest.add('Subdomain - factory', function (test) {
    DDD.Domain('testDomain1', function (domain) {
        var setSubdomain;
        domain.domain('TestSubdomain', function (subdomain) {
            setSubdomain = subdomain;
            test.equal(subdomain.name, 'TestSubdomain');
            test.equal(subdomain.context, '/TestDomain1');
        });
        test.equal(domain.Domain, {
            'TestSubdomain': setSubdomain
        });
    });
});

Tinytest.add('Subdomain - usage', function (test) {
    var domain = DDD.Domain('testDomain1'),
        subdomain = domain.Domain.TestSubdomain;
    test.equal(subdomain.name, 'TestSubdomain');
    test.equal(subdomain.context, '/TestDomain1');
    test.equal(subdomain.Parent, domain, 'Parent not set');
});