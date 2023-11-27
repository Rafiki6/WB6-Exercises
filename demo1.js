for (let i = 0; i < 5; i++) {
    console.log(i)
    // do something
    i = i + 1;

}
function isIsogram(str) {
    const letters = [];
    const lowerCaseLetter = str.tolowerCase();

    for (let char of letters) {
        if (/[a-z]/.test[char]) {
            if (letters[char]) {
                return false;
            }
            letters[char] = true;
        }
    }
    return true;
}