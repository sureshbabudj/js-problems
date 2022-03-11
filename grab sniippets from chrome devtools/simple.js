const fs = require('fs');
const snippets = require('./snippets');

try {
    for (let i of snippets) {
        fs.createWriteStream(`./result/${i.name}.js`, {
            flags: 'a' //flags: 'a' preserved old data
        }).write(i.content);
    }
    console.log('done');

} catch (error) {
    console.error(error);
}


