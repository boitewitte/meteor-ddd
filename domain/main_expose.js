ExposeMainDomain = class Domain {
    constructor(domainName) {
        check(domainName, String);
        this.name = domainName;
    }
    get Domain() {
        var domains = DomainRepo.getAllExposed(Utils.contextName(this.name));

        if (domains && Match.test(domains, Array) && domains.length > 0) {
            var returnDomain = {};
            _.each(domains, function (domain) {
                returnDomain[domain.name] = domain;
            });
            return returnDomain;
        }
        return false;
    }
};