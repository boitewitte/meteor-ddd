(function (DDD) {
    DDD.Domain = function (name, factory) {
        check(name, String);

        DomainRepo.create(name);

        if (factory) {
            check(factory, Function);
            factory(DomainRepo.get(name));
        }

        DomainRepo.createExposed(name);
        return DomainRepo.getExposed(name);
    }
})(DDD || (DDD = {}));