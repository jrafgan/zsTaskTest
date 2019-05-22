const fs = require('fs');

fs.readFile('input.txt', 'utf8', (e, data) => {

    let arr = data.toString();
    arr = arr.split('\n');
    arr.map(line => {

        fs.readFile('pattern.txt', 'utf8', (e, data) => {

            if (e) throw e;
            let text = data.toString();
            const textArr = text.split('\n');
            textArr.map(string => {

                if (line.charAt(0) === string.charAt(0) && line.slice(-1) === string.slice(-1)) {
                    console.log(line)
                }

            });
        });

    });

});

