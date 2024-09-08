function longestString(str){
    
    const words = str.split(" ");
    let longWord = '';
    for(let word of words){
        if(word.length > longWord.length){
            longWord = word;

        }
    }
    return longWord;



}

const string = longestString("I am learning Programming to become a programmer");
console.log(string);


