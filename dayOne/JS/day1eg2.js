/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let array =[1,2,3,4,5];
let array2 =[]
console.log(array)
array.map(value=>{
    value=value*2;
    array2.push(value)
})
console.log(array2)
const array3 = array2.filter(value => value>3);
console.log(array3)
const string = array2.join('-')
console.log(string)
const array4 = string.split("-")
console.log(array4)
const array5 = array4.map(value=> parseInt(value))
console.log(array5);
let sum =0
const totalSum = array5.reduce(function (previousValue, currentValue){
    return previousValue + currentValue;
})
console.log(totalSum)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function getBooks(callback){
//     setTimeout(()=>{
//         callback(
//             ([
//                 {
//                     title :"Designing Data Intensive Applications",
//                     author:"Martin Kleppmann",
//                 },
//                 {
//                     title :"The Psychologu od Money",
//                     author:"Morgan Housel",
//                 },
//             ])
//         );
//     },1000)
// }
// function findAuthor(bookTitle, callback){
//     getBooks((books)=>{
//         const book = books.find((book)=>book.title === bookTitle);
//         callback(book.author);
//     });
// }
// findAuthor("The Psychologu od Money", console.log)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getBooks(){
return new Promise((resolve, reject)=>{
    let books =[]
    setTimeout(()=>{
        books=[
            {title :"Designing Data Intensive Applications",author:"Martin Kleppmann"},
        {title :"The Psychologu od Money", author:"Morgan Housel"},
        ];
    resolve(books)
    },1000)
})
}
async function findAuthor(bookTitle){
    const books = await getBooks();
    console.log(await books);
    return books.find((book)=> book.title === bookTitle?.author);
}
console.log( findAuthor("The Psychologu od Money"));