BaseContext = class BoundedContext {
    constructor(contextName, context, options) {
        check (contextName, String);
        check (context, String);
        this.name = contextName;
        this.context = context;
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
    get Aggregate () {

    }
    get Repository () {

    }
    get Service () {

    }
    get contextName () {
        return Utils.contextName(this.context, this.name);
    }
};