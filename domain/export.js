(function (DDD) {
    DDD.Domain = function (name, factory) {
        check(name, String);
        check(factory, Function);

        DomainRepo.create(name);
        if (factory) {
            factory(DomainRepo.get(name));
        }

        DomainRepo.createExposed(name);
        return DomainRepo.getExposed(name);
    }
})(DDD || (DDD = {}));