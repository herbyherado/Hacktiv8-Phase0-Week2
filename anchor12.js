let myString = 'hello world!'

function balikString(str){
    let newString = '';
    for (i = str.length - 1; i >= 0; i--){
        newString += str[i];
    }
    return newString;
}

console.log(balikString(myString));