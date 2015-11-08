Tinytest.add('Utils - capitalize', function (test) {
    test.equal(Utils.capitalize('test'), 'Test');
    test.equal(Utils.capitalize('Test'), 'Test');
    test.equal(Utils.capitalize('testDomain'), 'TestDomain');
    test.equal(Utils.capitalize('TestDomain'), 'TestDomain');
});

Tinytest.add('Utils - contextName', function (test) {

});