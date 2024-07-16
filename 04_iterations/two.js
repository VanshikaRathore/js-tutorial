//Map, Reduce, Filter
 const coding = ["js", "ruby" , "java", "python", "cpp"]

 const values = coding.forEach((item)=>{
    // console.log(item);
    return item; // forEach koi value return nahi krta
 })

 //console.log(values);

 const myNums = [1,2,3,4,5,6,7,8,9]

//  const newNums = myNums.filter((num)=>num > 4)
//  console.log(newNums);   //Filter return those value which are true

// const newNums = myNums.filter((num)=>{
//    return num > 4
// })
//console.log(newNums);   // While using scope {} we should have to return the value othervise it will show empty
//if we want to use forEach method in place of filter
const newNums = [];
myNums.forEach((num)=>{
    if(num>5){
        newNums.push(num);
    }
})
 console.log(newNums);


 const books = [
    {
        title: 'Book one' , genre : "Fiction" , publish : 1991,edition : 2007
    },
    {
        title: 'Book two' , genre : "Non Fiction" , publish : 1992,edition : 2008
    },
    {
        title: 'Book three' , genre : "Science" , publish : 1999,edition : 2005
    },
    {
        title: 'Book Four' , genre : "Non Fiction" , publish : 1989,edition : 1996
    },
    {
        title: 'Book Five' , genre : "History" , publish : 1993,edition : 2009
    },
    {
        title: 'Book Six' , genre : "Fiction" , publish : 2000,edition : 2004
    },
    {
        title: 'Book Seven' , genre : "Non Fiction" , publish : 2021,edition : 2024
    },
 ];

//  const UserBooks = books.filter((bk)=>bk.genre==='Non Fiction')
//  console.log(UserBooks);

const UserBooks = books.filter((bk)=>bk.publish >=1991 && bk.genre === 'Non Fiction')
console.log(UserBooks);
