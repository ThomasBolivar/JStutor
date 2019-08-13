const PENDING = 'PENDING';
const RESOLVED = 'RESOLVED';

function someFunction(a, b, callBack) {
    let state = PENDING;
    let result = a * b;
    if (result>23) {
        callBack(result);
    }


}

someFunction(5, 6, (result) => {
    console.log("Result is: ", result)
    try {
        state = RESOLVED;
        console.log('Success', state);
    } catch (e) {
        Error.call(e);
    }
});
