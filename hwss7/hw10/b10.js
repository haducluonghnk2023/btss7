"use strict";
function removeFalsy(obj) {
    const result = {};
    for (const key in obj) {
        if (obj[key]) {
            result[key] = obj[key];
        }
    }
    return result;
}
const inputObj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a'
};
const outputObj = removeFalsy(inputObj);
console.log(outputObj);
