const ContextRepository = {
    base: {},
    expose: {},
    inline: {}
};

var getContextName = function getContextName (name, context) {
    check(name, String);
    check(context, String);

    return Utils.contextName(context, name);
}

ContextRepo = {
    get: function (name, context) {

        let contextName = getContextName(name, context);

        if (ContextRepository.base[contextName]) {
            return ContextRepository.base[contextName];
        }

        return false;
    },
    getExposed: function (name, context) {

        let contextName = getContextName(name, context);

        if (ContextRepository.expose[contextName]) {
            return ContextRepository.expose[contextName];
        }
        return false;
    },
    getInline: function (name, context) {

        let contextName = getContextName(name, context);

        if (ContextRepository.inline[contextName]) {
            return ContextRepository.inline[contextName];
        }
        return false;
    },
    create: function (name, context) {

        let contextName = getContextName(name, context);

        if (!ContextRepository.base[contextName]) {
            ContextRepository.base[contextName] = new BaseContext(name, context);
            return true;
        }
        return false;
    },
    createExposed: function createExposed (name, context) {

        let contextName = getContextName(name, context);

        if (!ContextRepository.expose[contextName]) {
            ContextRepository.expose[contextName] = new ExposeContext(name, context);
            return true;
        }
        return false;
    },
    createInline: function createInline (name, context) {

        let contextName = getContextName(name, context);

        if (!ContextRepository.inline[contextName]) {
            ContextRepository.inline[contextName] = new InlineContext(name, context;
            return true;
        }

        return false;
    }
};

