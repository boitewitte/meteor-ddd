ExposeDomain = class Domain {
    constructor(domainName, options) {
        this.name = Utils.capitalize(domainName);
        this.context = options.context || false;
    }
    get Parent() {
        if (this.context) {
            var context = Utils.contextSplit(this.context),
                parentDomainName = context.pop(),
                parentDomainContext = (context.length > 0) ? Utils.contextName(...context) : false;
            return DomainRepo.getExposed(parentDomainName, parentDomainContext);
        }
        return false;
    }
    get Repository() {

    }
    get Service () {

    }
    get Domain() {
        var domains = DomainRepo.getAllExposed(Utils.contextName(this.context, this.name));
        if (domains) {
            return domains;
        }
        return false;
    }
    emit(eventName, data) {

    }
};