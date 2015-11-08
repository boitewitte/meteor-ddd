function capitalize (string) {
    check (string, String);
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function contextName (...args) {
    check(args, [Match.OneOf(String, false)]);
    var context = "";
    _.each(args, function (value) {
        if (value) {
            context += "/" + value.replace(/^\//, '').replace(/\/$/, "");
        }
    });
    return context;
}

function contextSplit (context) {
    check (context, String);
    return removeEmptyStringsFromArray(context.split('/'));
}

function removeEmptyStringsFromArray (array) {
    return _.filter(array, function (element) {
        return (Match.test(element, String) && element.length > 0);
    });
}

Utils = {
    capitalize: capitalize,
    contextName: contextName,
    contextSplit: contextSplit,
    removeEmptyStringsFromArray: removeEmptyStringsFromArray
};