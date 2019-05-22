const fs = require('fs');


fs.readFile('input.txt', 'utf8', (e, data)=>{

    let arr = data.toString();
    arr = arr.split('\n');
    arr.map(line=>{
        const somePattern = new RegExp(line, 'gim');

        fs.readFile('pattern.txt', 'utf8', (e, data)=>{
            if (e) throw e;
            let text = data.toString();
            const result = text.match(somePattern);
            if (result !== null) {
                console.log(...result);
            }
        });

    });

});

