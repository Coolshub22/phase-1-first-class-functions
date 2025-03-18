function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction() {
    function namedFunction() {
        return 'Named function';
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('Anonymous Function');
    };
}