
const Handlers = {};

Handlers.mth1 = (data, callback) => {

    console.log('mth1 called');
    callback(200, {
        'name':'test'
    });

}

Handlers.notFound = (data, callback) => {
    callback(404);
    console.log('Not found called');
}

module.exports = Handlers;