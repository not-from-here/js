function createFrameworkManager() {
    const fw = ['Angular', 'React'];

    return {
        print: function () {
            console.log(fw.join(' '))
        },
        add: function (framework) {
            fw.push(framework)
        }
    }
}

// In this way, fn is private but, we can change it using this way.
const manager = createFrameworkManager();
// console.log(manager);
manager.print();
manager.add('VueJS');

manager.print();

const manager2 = createFrameworkManager();
manager2.add('Node');

manager2.print();
