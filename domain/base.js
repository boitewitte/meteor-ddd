BaseDomain = class Domain {
    constructor (domainName, options) {
        options = options || {};
        this.name = Utils.capitalize(domainName);
        this.context = options.context || false;

    }
    context(contextName, factory) {
        check(contextName, String);
        check(factory, Function);

        var subDomainContext = Utils.contextName(this.context, this.name);
        ContextRepo.create(contextName, subDomainContext);

        if (factory) {
            factory(ContextRepo.get(contextName, subDomainContext));
        }

        ContextRepo.createExposed(contextName, subDomainContext);
        return ContextRepo.getExposed(contextName, subDomainContext);
    }
    get Context () {
        var contexts = ContextRepo.getAll(Utils.contextName(this.context, this.name));

        if (contexts && Match.test(contexts, Array), contexts.length > 0) {
            var returnContext = {};
            _.each(contexts, function (context) {
                returnContext[context.name] = context;
            });
            return returnContext;
        }
        return false;
    }
    /*get Domain () {
        var domains = DomainRepo.getAll(Utils.contextName(this.context, this.name));

        if (domains && Match.test(domains, Array), domains.length > 0) {
            var returnDomain = {};
            _.each(domains, function (domain) {
                returnDomain[domain.name] = domain;
            });
            return returnDomain;
        }
        return false;
    }*/
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