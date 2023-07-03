let arr = ['amir', 'zokir', 'ravshan', 'jamshud', 'alex']
let evenNames = arr.filter(name => name.length % 2 === 0);
let oddNames = arr.filter(name => name.length % 2 !== 0);

arr.forEach(name => {
    if (name.length > evenNames.length) {
        evenNames = name;
    }
});

console.log(evenNames, oddNames)