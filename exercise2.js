require('es6-promise');

'use sctrict';

const promise = new Promise(function(fulfill,reject) {
    setTimeout(() => {
        fulfill('FULFILLED!')
    }, 300);
});

promise.then(console.log)