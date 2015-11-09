MainBase = class MainDomain {
    constructor(domainName) {
        check(domainName, String);
        this.name = domainName;
    }
    domain(domainName, factory) {
        check(domainName, String);
        check(factory, Function);
        var domainContext = Utils.contextName(this.name);
        DomainRepo.create(domainName, subDomainContext);

        if (factory) {
            factory(DomainRepo.get(domainName, subDomainContext));
        }

        DomainRepo.createExposed(domainName, subDomainContext);
        return DomainRepo.get(domainName, subDomainContext);
    }
};