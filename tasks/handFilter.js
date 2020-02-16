Array.prototype.filter = handFilter;
function handFilter(callbackFunc) {
    let arr = [];
    if (typeof callbackFunc === "function" && Array.isArray(this) && this.length){
        arr = this;
    }
    const resArr = [];
    for (let i = 0; i < arr.length; i++) {
        (callbackFunc(arr[i],i,arr))?resArr.push(arr[i]):null;
    }
    return resArr;
}

const data = [
    { name: 'Mark', isRegistered: true },
    { name: 'Mary', isRegistered: false },
    { name: 'Mae', isRegistered: true }
];

const registeredUsers = data.filter(user => user.isRegistered);

console.log(registeredUsers);