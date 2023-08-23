function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
}

function find(sence, word) {
 if (sence.includes(word)) {
        console.log('Found the', "'"+word+"'", 'at', sence.indexOf(word));
    } else {
        console.log('---No match found');
    }
}

letterFinder("test", "t");
find("test will be on tomorrow", "will");