(function (DDD) {
    DDD.Domain = function (name, factory) {
        check(name, String);

        DomainRepo.createMain(name);

        if (factory) {
            check(factory, Function);
            factory(DomainRepo.get(name));
        }

        DomainRepo.createMainExposed(name);
        return DomainRepo.getMainExposed(name);
    }
})(DDD || (DDD = {}));