const ContextRepository = {
    'base': {},
    'expose': {}
};

ContextRepo = {
    get: function (name, context) {
        check(name, String);
        check(context, String);

        let contextName = Utils.contextName(context, name);
        if (ContextRepository.base[contextName]) {
            return ContextRepository.base[contextName];
        }
        return false;
    },
    getExposed: function (name, context) {
        check (name, String);
        check (context, String);

        let contextName = Utils.contextName(context, name);
        if (ContextRepository.expose[contextName]) {
            return ContextRepository.expose[contextName];
        }
        return false;
    },
    create: function (name, context) {
        check (name, String);
        check (context, String);

        let contextName = Utils.contextName(context, name);
        if (!ContextRepository.base[contextName]) {
            ContextRepository.base[contextName] = new BaseContext(name, context);
            return true;
        }
        return false;
    },
    createExposed (name, context) {
        check (name, String);
        check (context, String);

        let contextName = Utils.contextName(context, name);
        if (!ContextRepository.expose[contextName]) {
            ContextRepository.expose[contextName] = new ExposeContext(name, context);
            return true;
        }
        return false;
    }
};

