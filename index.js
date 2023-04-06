function receivesAFunction (thisFunction) {
    return thisFunction ();
}
function returnsANamedFunction () {
    return receivesAFunction;
}
function returnsAnAnonymousFunction (){
    return function (){
        return thisFunction ();
    };
}