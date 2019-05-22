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
                // console.log(line.charAt(0), line.slice(-1));
                // console.log(string.charAt(0), string.slice(-1));

                if (line.charAt(0) === string.charAt(0) && line.slice(-1) === string.slice(-1)) {
                    console.log(line)
                }

            });
        });

    });

});

