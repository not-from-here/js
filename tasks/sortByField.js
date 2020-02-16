let users = [
    {
        name: 'a',
        surname: 'z'
    },
    {
        name: 'b',
        surname: 'b'
    },
    {
        name: 'z',
        surname: 'a'
    }
];
byField = (field) => {
    return (a, b) => {
        return a[field] > b[field] ? 1 : -1;
    }
};
users.sort(byField('surname'));
console.log(users);
