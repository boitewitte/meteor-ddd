InlineContext = class BoundedContext {
    constructor(contextName, context, options) {
        check (contextName, String);
        check (context, String);

        this.name = contextName;
        this.context = context;
        
    }
};