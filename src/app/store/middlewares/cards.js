// TODO: add deps
/*export default function myInjectableMiddleware($http, anotherDependency) {
    return store => next => action => {
        console.log(action);
        next(action);
    }
}*/

export default ({dispatch}) => next => action => {
    console.log(action);
    next(action);
};
