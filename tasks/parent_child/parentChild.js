let arr = [
    {
        id: 1,
        parent: null
    },
    {
        id: 14,
        parent: 8
    }
    ,
    {
        id: 3,
        parent: 1
    },
    {
        id: 2,
        parent: 15
    },
    {
        id: 4,
        parent: 1
    },
    {
        id: 5,
        parent: 13
    },
    {
        id: 6,
        parent: 2
    },
    {
        id: 7,
        parent: 3
    },
    {
        id: 8,
        parent: 3
    },
    {
        id: 9,
        parent: 3
    },
    {
        id: 10,
        parent: 4
    }
    ,
    {
        id: 11,
        parent: 2
    },
    {
        id: 12,
        parent: 10
    }
    ,
    {
        id: 13,
        parent: 12
    }
    ,

    {
        id: 15,
        parent: 5
    }
];

function fck(id, parent, child) {
    const obj = {};
    obj.id = id;
    obj.parent = parent;
    obj.child = child;
    return obj
}
let arr2 = [];
let chs = [];
arr.forEach((item) => {
    arr.forEach((item2) => {
        if (item2.parent === item.id) {
            chs.push(item2.id);
        }
    });
    arr2.push(fck(item.id, item.parent, chs));
    chs = [];
});
arr2 = arr2.reverse();
console.log(arr2);
arr2.forEach((item) => {
    item.child.forEach((item2) => {
        arr2.forEach((item3) => {
            if (item3.id === item2) {
                item.child.push(item3);
            }
        });
    });
});
arr2.forEach((item) => {
    item.child.reverse();
    item.child.length = item.child.length/2;
    item.child.reverse();
});
const res = arr2[arr2.length - 1];
console.log(res);

