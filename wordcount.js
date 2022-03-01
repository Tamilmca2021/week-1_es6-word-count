
var sentence ='AbrahamLincoln was born on February 12 1809 in Kentucky United States His fathers name was Thomas Lincoln and mothers name was Nancy Hanks Lincoln He was born into a poor family who did not have a good home to live in nor any means of getting education for children Lincoln used to seek books from different places and read at night in the light of the stove fire and gained knowledge He was self-educated and became a lawyer  Abraham Lincoln became the President of America. He was the sixteenth President of the United States. His tenure was from 1861 to 1865. He was a skilled politician as well as a book-lover, serious thinker and writer. He saved the country from being divided into two parts forever and also freed the country from the horribly inhuman slave systemAbraham Lincoln overcame America with its greatest crisis the Civil War Lincoln owes the end of slavery in America He was assassinated on April 15 1865 Lincoln is remembered as the martyr hero of the United States and he is consistently ranked as one of the greatest presidents in American history Lincoln Memorial is one of the most visited monuments in the nations capital'

var words=()=>{
    sentence=sentence.replace(/[,.]/g, "")
    const wordArray = sentence.split(" ");
    return wordArray
}
var wordArr=words()

var wordFrequency=(wordArr)=>{
    let wordS= new Set(wordArr)
    console.log(wordS.size);
    let word=[...wordArr]
    let wordCount={}
    
    word.forEach((item) => {
        if (wordCount[item] == null){
            wordCount[item] = 1;
        }else {
            wordCount[item] += 1;
            }
        });
 return wordCount

}
console.log(wordFrequency(wordArr));