function howMany(sentence) {
    // Write your code here
    let words = sentence.split(' ');
    let count = words.length;
    for (let i = 0; i < words.length; i++) {
        if (/^\d+$/.test(words[i])) {
            count = count - 1;
        }
        if (/^[a-zA-Z](.,?!-)+$/.test(words[i])) {
            count = count - 1;
        }
    }
    console.log(count);
    return count;
}


howMany('jds dsaf lkdf kdsa fkldsf, adsbf ldka ads? asd bfdal ds bf[l. akf dhj ds 878  dwa WE DE 7475 dsfh ds  RAMU 748 dj.');