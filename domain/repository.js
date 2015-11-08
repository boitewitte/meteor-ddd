let DomainRepository = {},
    ExposedDomainRepository = {};

function domainOptions (context) {
    let domainOptions = {};
    if (context && Match.test(context, String)) {
        domainOptions.context = context;
    }
    return domainOptions;
};

function getAllInContextRegexp(context = false) {
    return new RegExp("^" + Utils.contextName(context) + "/[a-z0-9]+(/)?$", 'i');
}

DomainRepo = {
    get: function (name, context = false) {
        check(name, String);
        check(context, Match.OneOf(String, false));

        name = Utils.capitalize(name);

        let domainName = Utils.contextName(context, name);
        if (!DomainRepository[domainName]) {
            DomainRepository[domainName] = new BaseDomain(name, domainOptions(context));
        }
        return DomainRepository[domainName];
    },
    getAll: function (context = false) {
        check(context, Match.OneOf(String, false));

        let contextRegExp = getAllInContextRegexp(context);
        return _.filter(DomainRepository, function (domainClass, domainName) {
            return contextRegExp.test(domainName);
        }) || false;
    },
    getAllExposed: function (context) {
        check(context, Match.OneOf(String, false));

        let contextRegExp = getAllInContextRegexp(context);
        return _.filter(ExposedDomainRepository, function (domainClass, domainName) {
            return contextRegExp.test(domainName);
        }) || false;
    },
    getExposed: function (name, context = false) {
        check(name, String);
        check(context, Match.OneOf(String, Boolean));

        name = Utils.capitalize(name);

        let domainName = Utils.contextName(context, name);
        if (ExposedDomainRepository[domainName]) {
            return ExposedDomainRepository[domainName];
        }
        return false;
    },
    create: function (name, context = false) {
        check(name, String);
        check(context, Match.OneOf(String, false));
        name = Utils.capitalize(name);
        let domainName = Utils.contextName(context, name);
        if (!DomainRepo.get(name, context)) {
            DomainRepository[domainName] = new BaseDomain(name, domainOptions(context));
            return true;
        }
        return false;
    },
    createExposed: function (name, context = false) {
        check(name, String);
        check(context, Match.OneOf(String, false));
        name = Utils.capitalize(name);
        let domainName = Utils.contextName(context, name);
        if (!DomainRepo.getExposed(name, context)) {
            ExposedDomainRepository[domainName] = new ExposeDomain(name, domainOptions(context));
            return true;
        }
        return false;
    }
};