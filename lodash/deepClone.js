import _ from 'lodash';

/**
 * _.clone - Creates a shallow clone of value.
 * _.cloneDeep - This method is like _.clone except that it recursively clones value.
 */

/////////////////////////////////////////////
//Clone Deep

const obj = {
    name: 'Jane',
    age: 90,
    arr: [{id: 7}, {code: 404}],
    internalObj: {
        field1: 1,
        field2: {
            f1: 1,
            f2: 2
        },
        field3: [1, 2, 3]
    }
};

const newObj = _.cloneDeep(obj);

console.log(newObj);