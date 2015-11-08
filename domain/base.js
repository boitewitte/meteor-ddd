BaseDomain = class Domain {
    constructor (domainName, options) {
        options = options || {};
        this.name = Utils.capitalize(domainName);
        this.context = options.context || false;

    }
    aggregate(name, aggregateClass, aggregateFactory) {
        if(setAggregate(this.contextName, name, aggregateClass, aggregateFactory)) {

        }
        return false;
    }
    domain(name, factory) {
        check(name, String);
        check(factory, Function);
        var subDomainContext = Utils.contextName(this.context, this.name);
        DomainRepo.create(name, subDomainContext);
        if (factory) {
            factory(DomainRepo.get(name, subDomainContext));
        }

        DomainRepo.createExposed(name, subDomainContext);
        return DomainRepo.getExposed(name, subDomainContext);
    }
    repository(name, repositoryClass, repositoryFactory) {
        if(setRepository(this.contextName, name, repositoryClass, repositoryFactory)) {

        }
    }
    service (name, service) {
        if (setService(this.contextName, name, service)) {

        }
    }
    get Aggregate () {

    }
    get Repository () {

    }
    get Service () {

    }
    get contextName () {
        return Utils.contextName(this.context, this.name);
    }
    get Domain () {
        var domains = DomainRepo.getAll(Utils.contextName(this.context, this.name));

        if (domains && Match.test(domains, Array), domains.length > 0) {
            var returnDomain = {};
            _.each(domains, function (domain) {
                returnDomain[domain.name] = domain;
            });
            return returnDomain;
        }
        return false;
    }
};


/*class SetDomain extends BaseDomain {
    constructor(domainName, options) {
        super(domainName);
        options = options || {};

        this._Aggregates = options._Aggregates || {};
        this._Services = options._Services || {};
        this._Repositories = options._Repositories || {};
    }
    aggregate(name, aggregateClass, aggregateFactory) {
        if(setAggregate(this.contextName, name, aggregateClass, aggregateFactory)) {

        }
        return false;
    }
    repository(name, repositoryClass, repositoryFactory) {
        if(setRepository(this.contextName, name, repositoryClass, repositoryFactory)) {

        }
    }
    service (name, service) {
        if (setService(this.contextName, name, service)) {

        }
    }
    get contextName () {
        return Utils.contextName(this.context, this.name);
    }
    get Aggregate () {
        return getAggregates
    }
}*/