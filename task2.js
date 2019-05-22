const fs = require('fs');


fs.readFile('input.txt', 'utf8', (e, data) => {

    let arr = data.toString();
    arr = arr.split('\n');
    arr.map(line => {
        const somePattern = new RegExp(line, 'gim');

        fs.readFile('pattern.txt', 'utf8', (e, data) => {

            if (e) throw e;
            let text = data.toString();
            const textArr = text.split('\n');
            textArr.map(string => {

                if (string.length >= line.length) {
                    const result = string.match(line);
                    if (result !== null) console.log(string);

                } else {
                    const result = line.match(string);
                    if (result !== null) console.log(line);
                }
            });
        });

    });

});

