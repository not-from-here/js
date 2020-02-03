/**
 * A Callback function is a function that is
 * gonna get called at a later point in time.
 *
 *  Callback function adds some functionality to some
 *  data or event. The reduce, filter and map methods
 *  in Array expects a callback as a parameter.
 */

function doIt(onSuccess, onFailure) {
    let err;// = ...
    if (err) {
        onFailure(err)
    } else {
        onSuccess()
    }
}

/**
 * Promises are one way in handling asynchronous operations
 * in JavaScript. It represents the value of an asynchronous
 * operation. Promises was made to solve the problem of doing
 * and dealing with async code before promises we're using callbacks.
 *
 *
 *
 * Promises have 3 different states.
 *
 * Pending - The initial state of a promise.
 * The promise's outcome has not yet been known
 * because the operation has not been completed yet.
 *
 * Fulfilled (resolved) - The async operation is
 * completed and successful with the resulting value.
 *
 * Rejected - The async operation has failed
 * and has a reason on why it failed.
 *
 * Settled - If the promise has been
 * either Fulfilled or Rejected.
 */

/* new Promise( --Выполняемая функция--  function (resolve, reject) { … } ); */

const isStupid = false;

// Promise
const willIGetNewJob = new Promise(
    function (resolve, reject) {
        if (!isStupid) {
            const data = {
                salary: 10000,
                name: 'Alyona'
            };
            resolve(data); // Всё выполнено
        } else {
            const reason = new Error('you need to study');
            reject(reason); // reject
        }

    }
);

const tryGet = function () {
    willIGetNewJob
        .then(function (result) {
            // yay, you got a new job
            console.log(result);
            // output:{ salary: 10000, name: 'Alyona' }
        })
        .catch(function (error) {
            // oops
            console.log(error.message);
            // output: you need to study
        });
};

tryGet();

/**
 * The Promise constructor has two parameters which are functions
 * resolve and reject respectively.If the async operation has been
 * completed without errors call the resolve function to resolve the
 * promise or if an error occurred call the reject function and pass
 * the error or reason to it. We can access the result of the fulfilled
 * promise using the .then method and we catch errors in the .catch method.
 * We chain multiple async promise operations in the .then method
 * because the .then method returns a Promise
 */

const myPromiseAsync = (...args) => {
    return new Promise((resolve, reject) => {
        /*doSomeAsync(...args, (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        })*/
    })
};

myPromiseAsync()
    .then(result => {
        console.log(result);
    })
    .catch(reason => {
        console.log(reason);
    });

/**
 * async/await is the new way of writing asynchronous or non-blocking code
 * in JavaScript's. It is built on top of Promises. It makes writing
 * asynchronous code more readable and cleaner than Promises and Callbacks.
 */

//syntax
async function f() {
    return 1;
}

function callApi() {
    return fetch("url/to/api/endpoint")
        .then(resp => resp.json())
        .then(data => {
            //do something with "data"
        }).catch(err => {
            //do something with "err"
        });
}

/*The async keyword before the function declaration
makes the function return implicitly a Promise

The await keyword can only be used inside an async function.
Using await keyword in any other function which is not an async
function will throw an error. The await keyword awaits the
right-hand side expression (presumably a Promise) to return
before executing the next line of code
*/

async function callApi2() {
    try {
        const resp = await fetch("url/to/api/endpoint");
        const data = await resp.json();
        //do something with "data"
    } catch (e) {
        //do something with "err"
    }
}